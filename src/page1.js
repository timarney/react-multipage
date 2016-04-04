import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import ComponentA from './components/ComponentA'
ReactDom.render(<div>
                  <App title='page1' />
                  <ComponentA/>
                 </div>, document.getElementById('app'))
