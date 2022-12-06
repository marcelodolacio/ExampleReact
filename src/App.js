import * as React from 'react';

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }; 

  const teste =() => {
      console.log(checked);
  }

  return (
    <div className="App">
       <div>
      <input type="checkbox"  checked={checked}
          onChange={handleChange} />
    </div>
   <button onClick={teste}></button>
    </div>
  );
}

export default App;
