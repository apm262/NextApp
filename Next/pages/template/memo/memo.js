import React, {useState, useMemo} from 'react';

function App() {
  const [length, set_length] = useState(3);
  const [name, set_name] = useState('John Doe');

  return (
    <>
        <center>
            <h1 className="hello2">UseMemo example 2 </h1><br></br><br></br>
            <h3>Put your name and a number</h3><br></br>
            <input value={name} onChange={e => set_name(e.target.value)} /> <br></br>
            <NameDisplay name={name}/>
            <hr />
            <input value={length} onChange={e => set_length(Number(e.target.value))} /><br></br>
            <FibDisplay length={length} />
        </center>
    </>
  );
}

function FibDisplay({length}) {
  const numbers = useMemo(() => {
    console.log('Calculating numbers...');
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return <p>{length} numbers of the fibonacci sequence: {numbers.join(', ')} <br></br></p>;
}

const NameDisplay = React.memo(function ({name}) {
  console.log('Rerendering name...');
  return <p>Your name is {name}</p>;
});

export default App;