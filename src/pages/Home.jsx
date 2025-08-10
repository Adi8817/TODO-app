// import React from 'react'

// export default function Home() {
//   return (
//     <>
//     <form>
//         <input type="text" ></input>
//         <button>ADD TASK</button>
//     </form>
//     </>
//   )
// }

import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">TO-DO APP</h1>
      <form className="task-form">
        <input type="text" placeholder="Enter task..." />
        <button type="submit" className="add-btn">ADD TASK</button>
      </form>

      <div className="task-sections">
        <div className="task-card">To-Do Tasks</div>
        <div className="task-card">Ongoing Tasks</div>
        <div className="task-card">Completed Tasks</div>
      </div>
    </div>
  );
}
