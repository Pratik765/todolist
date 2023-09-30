import React, { useState } from "react";
import './index.css'
import ToDoList from './components/ToDoList'
import Footer from "./components/Footer";

const App = () => {
  const [item, setItem] = useState("")
  const [addButton, setaddButton] = useState([])

  const displayItems = (event) => {
    setItem(event.target.value)
  }

  const addItem = () => {
    setaddButton((oldItem) => {
      return [...oldItem, item]
    })
    setItem("")
  }

  const deleteItems = (id) => {
    setaddButton((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>ToDo List</h1>
          <input type="text" placeholder="Enter a item" value={item} onChange={displayItems} />
          <button onClick={addItem}>+</button>
          <ol>
            {/* <li>{item}</li> */}

            {addButton.map((arrItem, index) => {
              return <ToDoList text={arrItem} key={index} id={index} onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App