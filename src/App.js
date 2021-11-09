import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <div class="sidebar">
        <div>
          <a class="logo"></a>
        </div>
        <div>
          <a class="inbox"></a>
        </div>
        <div>
          <a class="today"></a>
        </div>
      </div>
      <div class="tasks">
        <div class="task-form">
          <textarea class="task-textarea">My task</textarea>
          <button class="task-create-btn"></button>
        </div>
        <div class="task">
          <div class="content">
            <input
              type="radio"
              class="custom-radio"
              id="happy"
              name="happy"
              value="yes"
            />
            <label for="happy"></label>
            <p class="text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form There are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form There are many variations of passages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form
            </p>
          </div>
          <div class="tags">
            <button class="tag">Today</button>
            <button class="tag">Second tag</button>
            <button class="tag">Third tag</button>
          </div>
        </div>
      </div>
    </div>
  );
}
