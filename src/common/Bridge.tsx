/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit'

/**
 * 参考链接：
 * https://github.com/standardnotes/editor-kit
 * https://github.com/standardnotes/code-pro/blob/main/src/components/Editor.tsx
 */
export abstract class BridgeableEditor extends Component<{
  saveRawText: (rawText: string) => void
}> {
  abstract loadRawText(rawText: string): void
}

export default (OriginEditor: typeof BridgeableEditor): React.ComponentClass =>
  class Bridge extends React.Component {
    private editorRef = React.createRef<BridgeableEditor>()

    private editorKit?: EditorKit

    componentDidMount() {
      this.configureEditorKit()
    }

    configureEditorKit() {
      this.editorKit = new EditorKit({
        delegate: new EditorKitDelegate({
          setEditorRawText: text => {
            this.editorRef.current?.loadRawText(text)
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          clearUndoHistory: () => {},
        }),
        mode: 'plaintext',
        supportsFilesafe: false,
      })
    }

    render() {
      return (
        <OriginEditor
          ref={this.editorRef}
          saveRawText={(rawText: string) => {
            this.editorKit?.onEditorValueChanged(rawText)
          }}
        />
      )
    }
  }
