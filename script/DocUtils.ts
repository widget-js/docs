import type { JSDoc, JSDocContainer, JSDocTag, NodeArray, TypeElement } from 'typescript'
import ts from 'typescript'
import { parse } from 'node-html-parser'

export class DocUtils {
  static genSeeAlsoDoc(jsDoc: ts.JSDoc, mdTextArr: string[]) {
    if (jsDoc.tags && jsDoc.tags.length > 0) {
      const seeTag = jsDoc.tags.filter(it => it.kind == ts.SyntaxKind.JSDocSeeTag)
      if (seeTag.length > 0) {
        mdTextArr.push(`\n`)
        mdTextArr.push(`参考：`)
      }
      for (const tag of seeTag) {
        if (tag.kind == ts.SyntaxKind.JSDocSeeTag) {
          mdTextArr.push(`- ${tag.comment}`)
        }
      }
    }
  }

  static genRemarkDoc(tags: NodeArray<JSDocTag>, mdTextArr: string[], sourceFile: ts.SourceFile) {
    const remarkTag = tags.filter(it => it.kind == ts.SyntaxKind.JSDocTag && it.tagName.getText(sourceFile) == 'remarks')
    for (const tag of remarkTag) {
      mdTextArr.push(`> ${tag.comment}`)
    }
  }

  static genExampleDoc(tags: NodeArray<JSDocTag>, mdTextArr: string[], sourceFile: ts.SourceFile) {
    const exampleTag = tags.filter(it => it.kind == ts.SyntaxKind.JSDocTag && it.tagName.getText(sourceFile) == 'example')
    for (const tag of exampleTag) {
      mdTextArr.push(`\n**Example:**\n${tag.comment}\n`)
    }
  }

  static genJsDocComment(jsDoc: ts.JSDoc, docTextArr: string[], sourceFile: ts.SourceFile) {
    if (jsDoc.comment) {
      if (typeof jsDoc.comment == 'string') {
        docTextArr.push(`${jsDoc.comment}  `)
      }
      else {
        if (jsDoc.comment[0].text) {
          docTextArr.push(`${jsDoc.comment[0].text}  `)
        }
        else {
          docTextArr.push(`${jsDoc.comment[0].getText(sourceFile)}  `)
        }
      }
    }
  }

  static genReturnDoc(jsDoc: ts.JSDoc, docTextArr: string[]) {
    const returnTags = jsDoc.tags?.filter(it => it.kind == ts.SyntaxKind.JSDocReturnTag)
    if (returnTags) {
      for (const tag of returnTags) {
        if (tag.kind == ts.SyntaxKind.JSDocReturnTag) {
          docTextArr.push(`\n**return**: ${tag.comment}  `.replaceAll('<', '&lt;').replaceAll('>', '&gt;'))
        }
      }
    }
  }

  static genParamsDoc(tags: NodeArray<JSDocTag>, docTextArr: string[], sourceFile: ts.SourceFile) {
    const paramsTags = tags.filter(it => it.kind == ts.SyntaxKind.JSDocParameterTag)
    for (const paramsTag of paramsTags) {
      const paramComment = paramsTag.comment
      if (typeof paramComment == 'string') {
        const dom = parse(paramComment)
        if (dom) {
          const ol = dom.querySelector('ol')
          if (ol) {
            const items = ol.querySelectorAll('li')
            const markdownList = items.map(it => `    - ${it.textContent}  `).join('\n')
            dom.removeChild(ol)
            docTextArr.push(`- _**${paramsTag.name.getText(sourceFile)}**_:${dom.textContent}`)
            docTextArr.push(`${markdownList}\n`)
            return
          }
        }
        docTextArr.push(`- _**${paramsTag.name.getText(sourceFile)}**_: ${paramComment}  `)
      }
    }
  }

  static getJSDoc(doc: JSDocContainer) {
    const jsDocs = doc.jsDoc as JSDoc[]
    let comment = ''
    if (jsDocs && jsDocs.length > 0) {
      comment = jsDocs[0].comment as string
    }
    return comment
  }

  static genMarkdownTableFromArray(arr: string[][]): string {
    const header = arr[0]
    const body = arr.slice(1)
    const headerStr = `|${header.join('|')}|\n`
    const splitLine = `|${header.map(_ => '---').join('|')}|\n`
    const bodyStr = body.map(it => `|${it.join('|')}|`).join('\n')
    return `${headerStr}${splitLine}${bodyStr}`
  }

  static isMethodOrProperty(node: TypeElement) {
    return node.kind == ts.SyntaxKind.MethodSignature || node.kind == ts.SyntaxKind.PropertySignature
  }
}
