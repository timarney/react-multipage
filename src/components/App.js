import React from 'react'

const App = (props) => (
  <div>
    <span>
      <a href='/index.html'>Home</a>&nbsp;
      <a href='/page1.html'>Page 1</a>&nbsp;
      <a href='/page2.html'>Page 2</a>&nbsp;
    </span>
    <h1>Hello World</h1>
    {props.title}
  </div>
)

export default App
