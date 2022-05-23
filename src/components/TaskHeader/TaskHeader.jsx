import React from "react";
import styles from "./taskHeader.module.css";
import data from '../../data/tasks.json'

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask = 0;
  data.forEach(el => {
    el.done === true ? unCompletedTask += 1 : unCompletedTask += 0
  })

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">You have {unCompletedTask}</b>
      <b data-cy="header-total-task"> of {totalTask} Tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
