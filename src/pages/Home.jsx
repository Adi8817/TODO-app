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

// import React from 'react';
// import './home.css';
// import { useState } from 'react';

// export default function Home() {
// const [ task , setTask]= useState('');
// // const [tasklist, setTasklist]= useState([]);
// const [tasks,setTasks]=useState({todo: [] , ongoing: [], completed:[] });

// //Handle Input change
// const handleInputChange =(e)=>{
//   setTask(e.target.value);
// }
// const addTask=()=>{
//   if(task.trim()!==''){
//     setTask((prevTasks)=>({
//       ...prevTasks, todo:[...prevTasks.todo,task],
//     }));
//     setTask('');
//   }
// }

// //Move to task to another category
// const moveTask =(currentCategory, targetCategory, taskToMove)=>{
//   setTask((prevTasks)=>{
//     //Remove Task From Current Category
//     const updatedCurrent = prevTasks[currentCategory].filter((t)=>t!== taskToMove);

//     // Add task to target Category
//     const updatedTarget = [...prevTasks [ targetCategory ], taskToMove];
//     return{... prevTasks,[currentCategory]: updatedCurrent,[targetCategory]: updatedCurrent};
//   });
// };

// // const handleSubmit=(event)=>{
// //   event.preventDefault();
// //   if(task.trim()===""){
// //     alert("Please enter a valid task!");
// //     return;
// //   }
// //   setTasklist([...tasklist, task.trim()]);
// //   setTask('');
// // }

//   return (
//     <div className="container">
//       <h1 className="title">TO-DO APP</h1>
//       <form className="task-form" onSubmit={(e)=>{
//         e.preventDefault();
//         addTask();
//       }}>
//         <input type="text" placeholder="Enter task..."  
//         value={task}
//         onChange={handleInputChange}
//         />
//         <button type="submit" className="add-btn" onClick={addTask}>ADD TASK</button>
//       </form>

//       <div className="task-sections">
//         <div className="task-card">To-Do Tasks
//           <ol>
//             {tasks.todo.map((t,index)=>(
//               <li key={index}>{t}
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Ongoing</button>
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Completed</button>           
//               </li>
//             ))}
//           </ol>
//         </div>
//         <div className="task-sections">
//           <div className="task-card">Ongoing Tasks
//           <ol>
//             {tasks.ongoing.map((t,index)=>(
//               <li key={index}>{t}
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Ongoing</button>
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Completed</button>           
//               </li>
//             ))}
//           </ol>
//         </div>
//         </div>
//         <div className="task-sections">
//           <div className="task-card">Completed Tasks
//           <ol>
//             {tasks.completed.map((t,index)=>(
//               <li key={index}>{t}
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Ongoing</button>
//               <button onClick={()=>moveTask('todo','ongoing',t)}>Move To Completed</button>           
//               </li>
//             ))}
//           </ol>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./home.css";

// export default function Home() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] });

//   const handleInputChange = (e) => {
//     setTask(e.target.value);
//   };

//   const addTask = () => {
//     if (task.trim() !== "") {
//       setTasks((prevTasks) => ({
//         ...prevTasks,
//         todo: [...prevTasks.todo, task],
//       }));
//       setTask("");
//     }
//   };

//   const moveTask = (currentCategory, targetCategory, taskToMove) => {
//     setTasks((prevTasks) => {
//       const updatedCurrent = prevTasks[currentCategory].filter((t) => t !== taskToMove);
//       const updatedTarget = [...prevTasks[targetCategory], taskToMove];
//       return {
//         ...prevTasks,
//         [currentCategory]: updatedCurrent,
//         [targetCategory]: updatedTarget,
//       };
//     });
//   };

//   return (
//     <div className="container">
//       <h1 className="title">📋 My To-Do App</h1>
//       <form
//         className="task-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           addTask();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Enter a new task..."
//           value={task}
//           onChange={handleInputChange}
//         />
//         <button type="submit" className="add-btn">
//           Add Task
//         </button>
//       </form>

//       <div className="task-sections">
//         {/* To-Do */}
//         <div className="task-card todo-card">
//           <h3>To-Do</h3>
//           <ol>
//             {tasks.todo.map((t, index) => (
//               <li key={index}>
//                 {t}
//                 <div className="btn-group">
//                   <button onClick={() => moveTask("todo", "ongoing", t)}>▶ Ongoing</button>
//                   <button onClick={() => moveTask("todo", "completed", t)}>✅ Completed</button>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>

//         {/* Ongoing */}
//         <div className="task-card ongoing-card">
//           <h3>Ongoing</h3>
//           <ol>
//             {tasks.ongoing.map((t, index) => (
//               <li key={index}>
//                 {t}
//                 <div className="btn-group">
//                   <button onClick={() => moveTask("ongoing", "todo", t)}>↩ To-Do</button>
//                   <button onClick={() => moveTask("ongoing", "completed", t)}>✅ Completed</button>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>

//         {/* Completed */}
//         <div className="task-card completed-card">
//           <h3>Completed</h3>
//           <ol>
//             {tasks.completed.map((t, index) => (
//               <li key={index}>
//                 {t}
//                 <div className="btn-group">
//                   <button onClick={() => moveTask("completed", "todo", t)}>↩ To-Do</button>
//                   <button onClick={() => moveTask("completed", "ongoing", t)}>▶ Ongoing</button>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./home.css";
export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState({ todo: [], ongoing: [], completed: [] });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Global CSS reset
  React.useEffect(() => {
    // Apply global styles to body
    document.body.style.margin = '0px';
    document.body.style.padding = '0px';
    document.body.style.boxSizing = 'border-box';
    document.documentElement.style.margin = '0px';
    document.documentElement.style.padding = '0px';
    
    // Apply to all elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(style);

    // Handle resize for responsive
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, task],
      }));
      setTask("");
    }
  };
  
  const moveTask = (currentCategory, targetCategory, taskToMove) => {
    setTasks((prevTasks) => {
      const updatedCurrent = prevTasks[currentCategory].filter((t) => t !== taskToMove);
      const updatedTarget = [...prevTasks[targetCategory], taskToMove];
      return {
        ...prevTasks,
        [currentCategory]: updatedCurrent,
        [targetCategory]: updatedTarget,
      };
    });
  };

  const deleteTask = (category, taskToDelete) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((t) => t !== taskToDelete),
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '0',
      margin: '0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: 'auto',
        padding: '20px'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: '0 0 10px 0',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            letterSpacing: '-1px'
          }}>
            📋 TaskFlow
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.9',
            margin: '0',
            fontWeight: '300'
          }}>
            Organize your tasks with style
          </p>
        </div>

        {/* Add Task Form */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              flexDirection: isMobile ? 'column' : 'row'
            }}
          >
            <input
              type="text"
              placeholder="✨ What needs to be done?"
              value={task}
              onChange={handleInputChange}
              style={{
                flex: '1',
                padding: isMobile ? '14px 16px' : '16px 20px',
                border: '2px solid #e1e5e9',
                borderRadius: '12px',
                outline: 'none',
                fontSize: isMobile ? '0.95rem' : '1rem',
                transition: 'all 0.3s ease',
                background: 'white',
                width: isMobile ? '100%' : 'auto',
                minWidth: isMobile ? '280px' : 'auto'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTask();
                }
              }}
            />
            <button
              type="button"
              onClick={addTask}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: isMobile ? '14px 24px' : '16px 32px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: isMobile ? '0.95rem' : '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                minWidth: isMobile ? '100%' : '140px',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Task Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px',
          alignItems: 'start'
        }}>
          {/* To-Do Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minHeight: '400px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid #fef3c7'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#f59e0b',
                marginRight: '12px'
              }}></div>
              <h3 style={{
                margin: '0',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#92400e'
              }}>
                To-Do ({tasks.todo.length})
              </h3>
            </div>
            <div>
              {tasks.todo.map((t, index) => (
                <div key={index} style={{
                  background: 'white',
                  margin: '12px 0',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #fef3c7',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }}>
                  <div style={{
                    marginBottom: '12px',
                    color: '#374151',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {t}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <button
                      onClick={() => moveTask("todo", "ongoing", t)}
                      style={{
                        flex: '1',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#2563eb'}
                      onMouseOut={(e) => e.target.style.background = '#3b82f6'}
                    >
                      ▶ Start
                    </button>
                    <button
                      onClick={() => moveTask("todo", "completed", t)}
                      style={{
                        flex: '1',
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#059669'}
                      onMouseOut={(e) => e.target.style.background = '#10b981'}
                    >
                      ✅ Done
                    </button>
                    <button
                      onClick={() => deleteTask("todo", t)}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                        minWidth: '36px'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#dc2626'}
                      onMouseOut={(e) => e.target.style.background = '#ef4444'}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              {tasks.todo.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '1rem',
                  padding: '40px 20px',
                  fontStyle: 'italic'
                }}>
                  No tasks yet. Add one above! 📝
                </div>
              )}
            </div>
          </div>

          {/* Ongoing Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minHeight: '400px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid #bfdbfe'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#3b82f6',
                marginRight: '12px'
              }}></div>
              <h3 style={{
                margin: '0',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#1e40af'
              }}>
                In Progress ({tasks.ongoing.length})
              </h3>
            </div>
            <div>
              {tasks.ongoing.map((t, index) => (
                <div key={index} style={{
                  background: 'white',
                  margin: '12px 0',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #bfdbfe',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                }}>
                  <div style={{
                    marginBottom: '12px',
                    color: '#374151',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {t}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <button
                      onClick={() => moveTask("ongoing", "todo", t)}
                      style={{
                        flex: '1',
                        background: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#d97706'}
                      onMouseOut={(e) => e.target.style.background = '#f59e0b'}
                    >
                      ↩ Back
                    </button>
                    <button
                      onClick={() => moveTask("ongoing", "completed", t)}
                      style={{
                        flex: '1',
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#059669'}
                      onMouseOut={(e) => e.target.style.background = '#10b981'}
                    >
                      ✅ Done
                    </button>
                    <button
                      onClick={() => deleteTask("ongoing", t)}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                        minWidth: '36px'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#dc2626'}
                      onMouseOut={(e) => e.target.style.background = '#ef4444'}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              {tasks.ongoing.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '1rem',
                  padding: '40px 20px',
                  fontStyle: 'italic'
                }}>
                  No tasks in progress 🚀
                </div>
              )}
            </div>
          </div>

          {/* Completed Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minHeight: '400px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid #bbf7d0'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#10b981',
                marginRight: '12px'
              }}></div>
              <h3 style={{
                margin: '0',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#065f46'
              }}>
                Completed ({tasks.completed.length})
              </h3>
            </div>
            <div>
              {tasks.completed.map((t, index) => (
                <div key={index} style={{
                  background: 'white',
                  margin: '12px 0',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #bbf7d0',
                  transition: 'all 0.3s ease',
                  opacity: '0.8'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.opacity = '0.8';
                }}>
                  <div style={{
                    marginBottom: '12px',
                    color: '#374151',
                    fontSize: '1rem',
                    lineHeight: '1.5',
                    textDecoration: 'line-through'
                  }}>
                    {t}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <button
                      onClick={() => moveTask("completed", "todo", t)}
                      style={{
                        flex: '1',
                        background: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#d97706'}
                      onMouseOut={(e) => e.target.style.background = '#f59e0b'}
                    >
                      ↩ Redo
                    </button>
                    <button
                      onClick={() => moveTask("completed", "ongoing", t)}
                      style={{
                        flex: '1',
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#2563eb'}
                      onMouseOut={(e) => e.target.style.background = '#3b82f6'}
                    >
                      ▶ Resume
                    </button>
                    <button
                      onClick={() => deleteTask("completed", t)}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                        minWidth: '36px'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#dc2626'}
                      onMouseOut={(e) => e.target.style.background = '#ef4444'}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              {tasks.completed.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '1rem',
                  padding: '40px 20px',
                  fontStyle: 'italic'
                }}>
                  No completed tasks yet 🎯
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          padding: '20px',
          marginTop: '40px',
          textAlign: 'center',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                {tasks.todo.length + tasks.ongoing.length + tasks.completed.length}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Total Tasks</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                {tasks.ongoing.length}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>In Progress</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                {tasks.completed.length}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
