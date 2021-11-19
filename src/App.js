
import React from 'react';
import Navbar from "./Navbar"
import Article from './Article';

function App() {

  let articlesData= [ 
    {heading:"Declarative" ,para:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug."},
    {heading:"Component-Based" ,para:"Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."},
    {heading:"Learn Once, Write Anywhere", para:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native."},
    {heading:"Learn Once, Write Anywhere", para:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native."},
    {heading:"Learn Once, Write Anywhere", para:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native."},
    {heading:"Learn Once, Write Anywhere", para:"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native."}
  ]


  return (
    <div className="App">
         <Navbar/>
        <h1>My React App</h1>
        <div style={{display:"flex",flexWrap:"wrap"}}> 
          {articlesData.map(data=>{
            return( <Article heading={data.heading}   para={data.para} />)
          })}

        </div>
        
    </div>
  );
}

export default App;