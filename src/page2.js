import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import ComponentB from './components/ComponentB'
ReactDom.render(<div>
                  <App title='page2' />
                  <ComponentB/>
                 </div>, document.getElementById('app'))
