import logo from './logo.svg';
import './App.css';

function App() {


  function handleSubmit(e)
  {
    alert('A name was submitted:');
  }
  return (
    <div className="App">
      <h2>MERN STACK EXAMPLE</h2>
      <form onSubmit={handleSubmit}>
      <div class='row'>
        <div class='col-md-6'>
          <input placeholder='Name'></input>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6'>
          <input placeholder='Blog'></input>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6'>
        <input placeholder='Age'></input>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6'>
          <input placeholder='Location'></input>
        </div>
      </div>
      <button type='submit'>Insert User</button>
      </form>
    </div>
  );
}

export default App;
