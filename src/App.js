import React from 'react'
import TaskList from './Components/TaskList'
import { TASKS } from './Constants'

const App = () => {
  return (
    <>
      <TaskList tasks={TASKS} />
    </>
  )
}

export default App