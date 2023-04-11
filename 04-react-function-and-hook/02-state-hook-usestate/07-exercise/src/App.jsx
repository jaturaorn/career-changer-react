import React, { useState } from 'react';

function App() {
    // adding state here.
    const [choices, setChoices] = useState();
  const handleClick = (value) => {
    // code here.
    setChoices(value.target.textContent);
  };

  return (
    <div>
      {/* ใช้แบบนี้ก็ได้ onclick{ () => handleClick('Fullname')} */}
      <button onClick={(handleClick)}>Fullname</button>
      <button onClick={(handleClick)}>Age</button>
      <button onClick={(handleClick)}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {

  let InFourE = props.choices;
  if (InFourE === 'Fullname') {
    InFourE = <h2>John Doe</h2>;
  } else if (InFourE === 'Age') {
    InFourE = <h2>30</h2>;
  } else if (InFourE === 'Picture') {
    InFourE = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    InFourE = <p>Please select an option.</p>;
  }

  return (
    <div>
      {InFourE}
    </div>
  );
}

export default App;
