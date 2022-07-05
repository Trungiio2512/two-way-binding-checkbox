import { useState } from "react";
import "./styles.css";

const courses = [
  {
    id: 1,
    name: "Html-Css"
  },
  {
    id: 2,
    name: "ReactJs"
  },
  {
    id: 3,
    name: "Javascript"
  }
];

export default function App() {
  const [course, setCourse] = useState([]);

  const hanldeData = (id) => {
    const isChecked = course.includes(id);

    if (isChecked) {
      setCourse((prev) => prev.filter((item) => item !== id));
    } else {
      setCourse((prev) => {
        return [...prev, id];
      });
    }
  };

  const hanldeSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      {courses.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={course.includes(item.id)}
              onChange={() => hanldeData(item.id)}
            />
            {item.name}
          </div>
        );
      })}
      <button onClick={() => hanldeSubmit(course)}>submit</button>
    </div>
  );
}
