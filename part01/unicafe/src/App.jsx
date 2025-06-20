import { use, useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const calcSum = (good, neutral, bad) => good + neutral + bad;
  const total = calcSum(good, bad, neutral);

  const calcPercentOfGoodFeedbacks = (good, neutral, bad) => {
    return total ? (good / total) * 100 + "%" : "0%";
  };

  const calcAverage = (good, neutral, bad) => {
    const score = good * 1 + neutral * 0 + bad * -1;
    return score ? score / total : 0;
  };

  const calcRandNumber = (max) => Math.floor(Math.random() * max);

  const handleVotes = (index) => {
    const newVotes = votes.map((vote, i) => (i === index ? vote + 1 : vote));
    return setVotes(newVotes);
  };

  return (
    <>
      <Title text={"Anecdote"} />
      <div>{anecdotes[selected]}</div>

      <div>
        <p>Votes: {votes[selected]}</p>
        <Button onClick={() => handleVotes(selected)} text={"Vote"} />

        <Button
          onClick={() => setSelected(calcRandNumber(anecdotes.length))}
          text={"Next anecdote"}
        />
      </div>

      <Title text={"Anecdote with most votes"} />
      {Math.max(...votes) === 0 ? (
        <p>No votes</p>
      ) : (
        <>
          <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
          <div>has {Math.max(...votes)} votes</div>
        </>
      )}

      <Title text="Give feedback" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Title text="StatisticLine" />

      {total ? (
        <table>
          <tbody>
            <StatisticLine value={good} text="Good" />
            <StatisticLine value={neutral} text="Neutral" />
            <StatisticLine value={bad} text="Bad" />
            <StatisticLine value={total} text="Sum" />
            <StatisticLine
              value={calcAverage(good, neutral, bad)}
              text="Average"
            />
            <StatisticLine
              value={calcPercentOfGoodFeedbacks(good, bad, neutral)}
              text="Positive"
            />
          </tbody>
        </table>
      ) : (
        <p>No Feedback</p>
      )}
    </>
  );
};

export default App;
