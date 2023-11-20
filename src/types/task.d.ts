type state = 'TASK_ARCHIVED'

type task = {
  id: string;
  title: string;
  state: state
}