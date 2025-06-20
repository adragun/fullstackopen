import { use, useState } from "react";

//this works because it contains single return statement(button)
const Display = ({ counter }) => <div>{counter}</div>;

//this works because it contains single return statement(button)
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
// const Button = ({ onClick, text }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseCounter = () => {
    console.log("increasing, value before", counter);

    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    console.log("decreasing, value before", counter);

    setCounter(counter - 1);
  };

  const resetCounter = () => {
    console.log("resetting to zero, value before", counter);

    setCounter(0);
  };

  // const Panel = ({ title, children }) => {
  //   const [isActive, setIsActive] = useState(false);

  //   return (
  //     <section>
  //       <h3>{title}</h3>
  //       {isActive ? (
  //         <>
  //           <p>{children}</p>
  //           <button onClick={() => setIsActive(false)}>Show less</button>
  //         </>
  //       ) : (
  //         <button onClick={() => setIsActive(true)}>Show more</button>
  //       )}
  //     </section>
  //   );
  // };

  return (
    <>
      <Display counter={counter} />

      <Button onClick={increaseCounter} text={"Increase Counter"} />
      {/* <button onClick={IncreaseCounter}>Increase Counter</button> */}
      <Button onClick={decreaseCounter} text={"Decrease Counter"} />
      <Button onClick={resetCounter} text={"Reset Counter"} />
      {/* <button onClick={resetCounter}>Reset Counter</button> */}

      {/* <Panel title={"Title"} children={"Some text"} /> */}
    </>
  );
};

export default App;
