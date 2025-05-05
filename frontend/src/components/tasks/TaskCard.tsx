type Task = {
  id: number
  title: string
  description: string
}

type TaskCardProps = {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">
      <h2>Task Title</h2>
      <p>Task description goes here.</p>
      <button className="btn">Complete</button>
    </div>
  )
}
