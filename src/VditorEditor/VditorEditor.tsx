import React from 'react'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

import './VditorEditor.scss'
import options from './options'

import { BridgeableEditor } from '../common/Bridge'

export default class VditorEditor extends BridgeableEditor {
  private vditor?: Vditor

  loadRawText(rawText: string): void {
    this.vditor?.setValue(rawText)
  }

  componentDidMount(): void {
    const { saveRawText } = this.props
    this.vditor = new Vditor('vditor', {
      ...options,
      input(value) {
        saveRawText(value)
      },
    })
  }

  render(): JSX.Element {
    return <div id='vditor' />
  }
}
