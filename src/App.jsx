import Navbar from './navbar.jsx'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showall, setshowall] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const getdata = async () => {
    let res = await fetch('http://localhost:3000/')
    let data = await res.json()
    settodos(data)
  }
  useEffect(() => {
    getdata()
  }, [])

  const handleadd = async () => {
    if (todo.trim() === "") {  // Check if the todo is empty or contains only spaces
      setErrorMessage("Please enter a valid todo.");  // Set error message
      return;
    }

    // Use an existing id if present (editing) or generate a new one
    const id = uuidv4();

    // If a todo with that id exists (i.e. we have an id), delete it first
    // if (todo.length > 0) {
    //   await fetch("http://localhost:3000/", {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({id})
    //   });
    // }

    // Create the new todo object
    const newTodo = { id: id, todo, iscompleted: false };

    // Update the state with the new todo
    settodos([...todos, newTodo]);

    // Save the new todo in the database
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    });

    // Clear input field and error message
    settodo("");
    setErrorMessage("");
  };

  const handlechange = (e) => {
    settodo(e.target.value);
  };
  const handleshowall = (e) => {
    setshowall(!showall)
  }
  const handledelete = async (e, id) => {
    let arr = todos.filter((item) => {
      return item.id != id
    })
    await fetch('http://localhost:3000/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
    settodos(arr);
  };


  const handleedit = async (e, id) => {
    // Find the todo that needs editing and set its content in the input
    const t = todos.find(item => item.id === id);
    settodo(t.todo);

    // Update the local state to remove the todo from the list
    const newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);

    // Delete the todo from the backend
    await fetch('http://localhost:3000/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  };

  const handlecheck = (e, id) => {
    let index = todos.findIndex((item) => {
      return item.id === id
    })
    let newtodos = [...todos]
    newtodos[index].iscompleted = !newtodos[index].iscompleted
    settodos(newtodos)
    fetch('http://localhost:3000/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newtodos[index])
    })
  };
  return (
    <>
      <div><Navbar /></div>
      <div className="w-[100vw] md:w-[60%] md:h-auto h-auto md:container mx-auto border border-black md:mt-5 mt-0 bg-slate-400  absolute left-1/2 transform -translate-x-1/2 pt-2 px-2 pb-3" >
        <div className='font-bold text-3xl text-center mt-2 '>iTask : Manage your Todos in one place</div>
        <div className="font-bold text-xl ml-3 mt-2"> Add a Todo</div>
        <div className='flex md:gap-6 gap-3 md:mx-auto '>
          <input placeholder="Enter" name="name" onChange={handlechange} value={todo} type="text" className='mt-3 ml-3 h-8 w-[80%] pl-5 py-auto rounded-xl' />
          <div> <button onClick={handleadd} className=' px-auto mt-3 py-1 bg-blue-500 w-14 rounded-xl hover:font-bold hover:transition-all font-semibold mr-2' >Save</button></div>
        </div>
        {errorMessage && (
          <div className="mt-3 ml-4 text-red-500">{errorMessage}</div>
        )}
        <h2 className='font-bold text-xl ml-3 mt-2'> Your Todos</h2>
        <div className="flex justify-start gap-2">
          <div ><input className="ml-5 h-5 w-5 mt-4 mb-3 hover:cursor-pointer" onChange={handleshowall} type="checkbox" checked={showall} /> </div>
          <div className="mt-3 "> Show Completed Ones</div>
        </div>
        {(todos.length === 0) && <div className='mt-3 ml-4'>No todos to show</div>}
        {todos.map(item => (
          (showall || !item.iscompleted) && (
            <div key={item.id} className="flex items-center justify-between p-3 ">
              {/* Left Section: Checkbox and Todo Text */}
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={item.iscompleted}
                  onChange={(e) => handlecheck(e, item.id)}
                  className="h-5 w-5 hover:cursor-pointer"
                />
                <span
                  className={`text-xl font-bold break-words ${item.iscompleted ? "line-through" : ""}`}
                >
                  {item.todo}
                </span>
              </div>

              {/* Right Section: Edit and Delete Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={(e) => handleedit(e, item.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-xl hover:font-bold hover:transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handledelete(e, item.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-xl hover:font-bold hover:transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          )
        ))}

      </div>

    </>

  )
}

export default App
