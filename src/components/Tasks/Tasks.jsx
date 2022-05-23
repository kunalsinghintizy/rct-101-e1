import React, { useState } from "react";
import styles from "./tasks.module.css";
import data from '../../data/tasks.json'



const Tasks = () => {
  const [list, setList] = useState(data)
  const handleclick = (items, value) => {
    let key = items
    if (list[key] === 0 && value === -1) {
      return
    }

    for (let i of list) {
      if (key === i.id) {
        console.log(i)
        if (i.count === 0 && value === -1) {
          return
        }
        else {
          console.log(list[i.id - 1], i)
          let temp_state = [...list];
          let temp_element = { ...(i) };
          temp_element.count = temp_element.count + value;
          temp_state[i.id - 1] = temp_element;
          setList(temp_state);
        }

      }

    }

  }


  const lilists = list.map(el => {
    return (
      <li>
        <div style={{ display: 'flex' }}>
          <h5>{el.text}</h5>
          <p onClick={() => handleclick(el.id, 1)} >+</p>
          <p>{el.count}</p>
          <p onClick={() => handleclick(el.id, -1)} >-</p>
        </div>
      </li>
    )
  })
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {lilists}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
