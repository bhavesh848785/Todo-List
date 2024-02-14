import React, { useState } from "react";

function App() {
  //hooks.....................................................
  const [inputlist, setinputlist] = useState();

  const [items, setitems] = useState([]);

  //input event.........................................
  const inputEvent = (event) => {
    setinputlist(event.target.value);
  };

  //display event..........................................
  const listOfitems = (event) => {
    // event.preventDefault();
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  //delete event...................................
  const deleteItem = (index) => {
    setitems((olditems) => {
      return olditems.filter((item, i) => i !== index);
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          value={inputlist}
          placeholder="add the list"
          onChange={inputEvent}
        />
        <button on onClick={listOfitems}>
          +
        </button>

        <ol>
          {/* <li>{inputlist}</li> */}

          {items.map((itemval, index) => {
            return (
              <>
                <div className="todo_style" key={index}>
                  {/* <i class="fa fa-times" area-hidden="true" /> */}
                  <i
                    className="fa-solid fa-circle-xmark"
                    area-hidden="true"
                    onClick={() => deleteItem(index)}
                  ></i>
                  <li>{itemval}</li>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
