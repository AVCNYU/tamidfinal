import { useState } from "react";



const moviereview = () => {
    const [todoName, setToDoName] = useState("");
    const [todoArr, setToDoArr] = useState([]);
    console.log(todoArr)

    function AddToDo() {
        setToDoArr([...todoArr, todoName]);

    }

    function RemoveToDo(idx) {
        setToDoArr(todoArr.filter(
            (item, index) => {
                return index != idx
            }
        ));
    }

    return (
        <main className="main-container">
            <h1>Movie Review</h1>
            <div className="todo-list">
                {
                    todoArr.map(
                        (item, index) => {
                            return (
                                <p onClick={() => { RemoveToDo(index) }}>{item}</p>
                            )
                        }
                    )
                }
            </div>
            <div className="input-group">
                <input type="text" placeholder="Add a todo" onChange={(e) => { let text = e.target.value; setToDoName(text) }} />
                <button onClick={AddToDo}>Add</button>
            </div>
        </main>
    );
};



export default moviereview;
