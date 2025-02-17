import * as path from 'node:path'
import * as fs from 'node:fs'
import type { EnumDeclaration, InterfaceDeclaration, JSDoc } from 'typescript'
import ts from 'typescript'
import consola from 'consola'
import fg from 'fast-glob'
import { genSidebarApi } from './doc/genSidebarApi'
import { DocUtils } from './DocUtils'
import { FileUtils } from './FileUtils'

fg.sync('../core/src/api/interface/*.ts').forEach((file) => {
  if (!FileUtils.isFileChanged(file)) {
    consola.warn('Skip:', file)
    return
  }
  const fileName = path.basename(file, '.ts')
  const apiName = fileName.replace('I', '')
  const apiMarkdownFile = path.resolve(`./api/${apiName}.md`)

  const interfaceNameReg = /I.+Api/g

  // const changed = FileUtils.isFileChanged(file)
  // if (!changed) {
  //   consola.warn('Skip:', file)
  //   return
  // }
  function extract(file: string): void {
    const program = ts.createProgram([file], { allowJs: true })
    const sourceFile = program.getSourceFile(file)
    if (sourceFile) {
      const docTextArr: string[] = []
      ts.forEachChild(sourceFile, (node) => {
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
          const interfaceNode = node as InterfaceDeclaration
          const interfaceName = interfaceNode.name.text
          if (interfaceName.match(interfaceNameReg)) {
            consola.info(`Generating ${apiName} doc`)
            docTextArr.push(`# ${apiName}`)

            const jsDoc = interfaceNode.jsDoc[0] as JSDoc
            DocUtils.genJsDocComment(jsDoc, docTextArr, sourceFile)
            DocUtils.genSeeAlsoDoc(jsDoc, docTextArr)
            if (jsDoc.tags && jsDoc.tags.length > 0) {
              DocUtils.genRemarkDoc(jsDoc.tags, docTextArr, sourceFile)
            }
            // sortByName
            const sortedMembers = interfaceNode.members.map(it => it).sort((a, b) => {
              if (DocUtils.isMethodOrProperty(a) && DocUtils.isMethodOrProperty(b)) {
                const aName = (a as ts.MethodSignature).name.getText(sourceFile)
                const bName = (b as ts.MethodSignature).name.getText(sourceFile)
                return aName.localeCompare(bName)
              }
              return 0
            })

            for (const member of sortedMembers) {
              if (DocUtils.isMethodOrProperty(member)) {
                const method = member as ts.MethodSignature
                const methodName = method.name.getText(sourceFile)
                docTextArr.push(`## ${methodName}`)
                const jsDocNode = method.jsDoc
                if (jsDocNode) {
                  const jsDoc = jsDocNode[0] as JSDoc
                  DocUtils.genJsDocComment(jsDoc, docTextArr, sourceFile)
                  if (jsDoc.tags) {
                    DocUtils.genParamsDoc(jsDoc.tags, docTextArr, sourceFile)
                    DocUtils.genReturnDoc(jsDoc, docTextArr)
                    DocUtils.genExampleDoc(jsDoc.tags, docTextArr, sourceFile)
                    DocUtils.genSeeAlsoDoc(jsDoc, docTextArr)
                  }
                }
              }
            }
          }
        }
        else if (node.kind === ts.SyntaxKind.EnumDeclaration) {
          const tableArr: string[][] = []
          tableArr.push(['Event', 'Comment', 'Payload'])
          const enumNode = node as EnumDeclaration
          const comment = DocUtils.getJSDoc(enumNode)
          docTextArr.push(`# ${comment}`)
          for (const member of enumNode.members) {
            const name = member.name.getText(sourceFile)
            const comment = DocUtils.getJSDoc(member)
            tableArr.push([name, comment, ''])
          }
          const doc = DocUtils.genMarkdownTableFromArray(tableArr)
          docTextArr.push(doc)
        }
      })

      fs.writeFileSync(apiMarkdownFile, docTextArr.join('\n\n'), 'utf-8')
    }
  }

  extract(file)
  genSidebarApi()
})
