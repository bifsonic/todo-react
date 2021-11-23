export default function TaskForm(props) {
  return (
    <div className="task-form">
      <textarea className="task-textarea" defaultValue="My task"></textarea>
      <button onClick={props.onSubmit} className="task-create-btn"></button>
    </div>
  );
}
