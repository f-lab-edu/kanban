import React from 'react';

import Task, { task } from './Task';

interface TaskList {
  loading: boolean;
  tasks: task[];
  onPinTask: () => void;
  onArchiveTask: () => void;
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }:TaskList) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}