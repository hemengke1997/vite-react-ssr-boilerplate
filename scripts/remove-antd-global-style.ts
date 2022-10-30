import path from 'node:path'
import Less from 'less'
import { normalizePath } from 'vite'

export class LessPluginRemoveAntdGlobalStyles implements Less.Plugin {
  constructor() {}

  public install(_less, pluginManager: Less.PluginManager): void {
    pluginManager.addFileManager(new RemoveAntdGlobalLess())
  }
}

class RemoveAntdGlobalLess extends Less.FileManager {
  constructor() {
    super()
  }

  public supports(filename: string, currentDirectory: string): boolean {
    if (filename.includes('global')) {
      const fullPath = normalizePath(path.join(currentDirectory, filename))

      if (fullPath.includes('antd/es/style/core/global') || fullPath.includes('antd/lib/style/core/global')) {
        return true
      }
    }
    return false
  }

  public async loadFile(): Promise<Less.FileLoadResult> {
    return {
      filename: 'empty-global-style.less',
      contents: '',
    }
  }
}
