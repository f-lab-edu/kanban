import React from 'react'
import TaskCard from '../TaskCard'

interface TaskListProps {
  loading: boolean
  tasks: Task[]
  onPinTask: () => void
  onArchiveTask: () => void
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: TaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  }

  if (loading) {
    return <div className="list-items">loading</div>
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}
