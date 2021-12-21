/* eslint-disable max-classes-per-file */

declare module 'sn-editor-kit' {
  declare class EditorKitDelegate {
    constructor(options: {
      setEditorRawText: (rawText: string) => void
      clearUndoHistory: () => void
      generateCustomPreview?: (rawText: string) => {
        html: string
        plain: string
      }
    })
  }
  declare class EditorKit {
    constructor(options: {
      delegate: EditorKitDelegate
      mode: string
      supportsFilesafe: boolean
    })

    onEditorValueChanged: (rawText: string) => void
  }
}
