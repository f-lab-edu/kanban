import React from 'react'

interface TaskProps {
  task: Task
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}

export default function TaskCard({ task, onArchiveTask, onPinTask }: TaskProps) {
  return (
    <div data-testid="task-list-item" className={`list-item ${task.state}`}>
      <p>{task.title}</p>
      <label htmlFor="checked" aria-label={`archiveTask-${task.id}`} className="checkbox">
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${task.id}`}
          checked={task.state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(task.id)} />
      </label>

      <label htmlFor="title" aria-label={task.title} className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {task.state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(task.id)}
          id={`pinTask-${task.id}`}
          aria-label={`pinTask-${task.id}`}
          key={`pinTask-${task.id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  )
}
