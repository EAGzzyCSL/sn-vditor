import './App.css'
import React from 'react'

import Bridge from './common/Bridge'
// import Editor from './SimpleEditor/SimpleEditor'
import Editor from './VditorEditor/VditorEditor'

const BridgedEditor = Bridge(Editor)

export default function App(): JSX.Element {
  return (
    <div className='app'>
      <BridgedEditor />
    </div>
  )
}
