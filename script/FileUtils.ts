import { execSync } from 'node:child_process'

export class FileUtils {
  /**
   * 给定一个文件，通过git判断文件是否有被修改过
   */
  static isFileChanged(file: string): boolean {
    try {
      // 执行 Git 命令来获取文件的状态
      const result = execSync(`git status --porcelain ${file}`).toString()

      // 如果返回结果不为空，说明文件有修改
      return result.trim() !== ''
    }
    catch (error) {
      console.error('Error executing git command:', error)
      return false
    }
  }
}
