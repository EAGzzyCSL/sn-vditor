import './App.css'
import React from 'react'

import Bridge from './common/Bridge'
// import Editor from './SimpleEditor/SimpleEditor'
import Editor from './VditorEditor/VditorEditor'

const BridgedEditor = Bridge(Editor)

// eslint-disable-next-line react/function-component-definition
export default function App(): JSX.Element {
  return (
    <div className='app'>
      <BridgedEditor />
    </div>
  )
}
