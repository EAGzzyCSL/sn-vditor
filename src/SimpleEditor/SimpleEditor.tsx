import React from 'react'

import './SimpleEditor.css'
import { BridgeableEditor } from '../common/Bridge'

export default class SimpleEditor extends BridgeableEditor {
  private taRef = React.createRef<HTMLTextAreaElement>()

  loadRawText(rawText: string): void {
    if (this.taRef.current) {
      this.taRef.current.value = rawText
    }
  }

  render(): JSX.Element {
    return (
      <textarea
        ref={this.taRef}
        className='simple-editor'
        onInput={event => {
          const { value } = event.currentTarget
          const { saveRawText } = this.props
          saveRawText(value)
        }}
      />
    )
  }
}
