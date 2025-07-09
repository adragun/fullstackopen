import Content from "./Content";

const Course = ({ courses }) =>
  courses.map((course) => <Content course={course} key={course.id} />);

export default Course;
