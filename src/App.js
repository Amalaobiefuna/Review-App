
//class component
// class Car extends React.Component{
//     render(){
//         <h1>Hello World!</h1>
//     }
// }

//function component
// function Car(){
//     return <h1>Hello World!</h1>
// }

// function App(){
//     return (
        // <div>
        //  <h1>Hello here!</h1>
        // <p>Hello again</p>
        // </div>
//     )
// }

// export default App

// JSX (javascript XML)
// import React from 'react'

// function App(){
//     const title = 'Review Application'
//     const body = 'The first paragraph in our code'
//     const fellowNames = [
//         {id:1, text: 'Amala'},
//         {id:2, text: 'Hamdia'},
//         {id:3, text: 'Nanama'},
//         {id:4, text: 'Gift'},
//     ]

//     return (
//         <div className='container'>
//             <h1>{title}</h1>
//             <p>{body}</p>

//             <div>
//                 <h3>Fellow Names({fellowNames.length}) </h3>
//                 <ul>
//                     {fellowNames.map((list, index) => (
//                         <li key={index}>{list.text}</li>
//                         ))}
//                 </ul>
//             </div>
    
//         </div>
//     )
// }

// export default App
//functional components
import Header from "./components/Header"
import Reviewitem from "./components/Reviewitem"

function App(){

    return (
        <div className="container">
            <Header />
            <Reviewitem />
        </div>
    )
}


//class components

// import React from 'react'
// import './index.css'
// import Header from './components/Header'
// import Example from './components/example'

// class App extends React.Component {
//     styles = {
//         fontStyle: 'bold',
//         color: 'gold'
//     }
//   render() {
//     return (
//       <div className='container'>
//         <Header />
//         <h1 style={this.styles}>Hello Ladies!</h1>
//         <Example/>
//       </div>
//     )
//   }
// }


export default App