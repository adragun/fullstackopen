export default function Hello(props) {
  console.log(props);
  return (
    <>
      <p>
        Hello, I am {props.name} and I am {props.age} y/o.
      </p>
    </>
  );
}
