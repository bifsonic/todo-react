export default function Task(props) {
  return (
    <div className="task">
      <div className="content">
        <input
          type="radio"
          className="custom-radio"
          id="happy"
          name="happy"
          value="yes"
        />
        <label htmlFor="happy"></label>
        <p className="text">{props.text}</p>
      </div>
      <div className="tags">
        <button className="tag">Today</button>
        <button className="tag">Second tag</button>
        <button className="tag">Third tag</button>
      </div>
    </div>
  );
}
