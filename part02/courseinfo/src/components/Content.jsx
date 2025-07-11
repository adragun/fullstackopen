import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
  return (
    <>
      <Header course={course} />
      {course.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
      <Total parts={course.parts} />
    </>
  );
};

export default Content;
