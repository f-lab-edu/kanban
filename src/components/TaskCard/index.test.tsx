/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import TaskCard from '.'

it('TaskCard 컴포넌트 Test', () => {
  // 테스트에 필요한 mock 데이터 생성
  const task: Task = {
    id: '1',
    title: '타이틀',
    state: 'TASK_ARCHIVED',
  }
  // 컴포넌트 렌더링
  render(<TaskCard task={task} onArchiveTask={jest.fn()} onPinTask={jest.fn()} />)

  // 특정 요소들을 가져와서 테스트
  const listItem = screen.getByTestId('task-list-item')

  // 예상되는 조건 확인
  expect(listItem).toHaveClass('list-item')
  expect(listItem).toHaveClass(task.state)
  expect(screen.getByText(task.title)).toBeInTheDocument()
})
