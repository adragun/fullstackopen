function Header(props) {
  return <h1>{props.title}</h1>;
}

function Part(parts) {
  const { name, exercises } = parts.part;
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
}

function Content({ parts }) {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  );
}

function Total({ parts }) {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
}

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header title={course} />

      <Content parts={parts} />

      <Total parts={parts} />
    </>
  );
};

export default App;
