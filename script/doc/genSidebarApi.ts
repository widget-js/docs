import * as path from 'node:path'
import * as fs from 'node:fs'
import ejs from 'ejs'
import fg from 'fast-glob'

export function genSidebarApi() {
  const arr: string[] = []
  fg.sync('./api/*.md', { ignore: ['./api/index.md'] }).forEach((file) => {
    const fileName = path.basename(file, '.md')
    arr.push(fileName)
  })
  const str = ejs.render(fs.readFileSync(path.resolve('script/doc/sidebarApi.ts.ejs'), 'utf8'), { apiList: arr })
  fs.writeFileSync('./api/index.ts', str)
}
genSidebarApi()
