import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
ReactDom.render(<div>
                <App title='home' />
                <ComponentA/>
                <ComponentB/>
                </div>, document.getElementById('app'))
