import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import './App.css'
// import React, { useState, useEffect } from 'react'

// function ReactLifeCycle() {
//   // State for the count
//   const [count, setCount] = useState(0)

//   // Effect for componentDidMount
//   useEffect(() => {
//     console.log('Component mounted')
//     // This is like componentWillUnmount
//     return () => {
//       console.log('Component will unmount')
//     }
//   }, [])

//   // Effect for componentDidUpdate
//   useEffect(() => {
//     console.log('Component updated')
//   }, [count])

//   // Render the component
//   return (
//     <div className='container'>
//       <div>
//         <h1 className='title'>
//           Life cycle in Class Component and functional component with Hooks
//         </h1>
//       </div>
//       <p className='counting'>Count: {count}</p>
//       <button className='cycleBtn' onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   )
// }

// export default ReactLifeCycle
