import backgroundImage from './background.jpeg';
import './App.css';


function App() {
  return (
    <>
      <div class="st-image"></div>
      <h1 class= "st-text st-title">
        <h1>Event</h1>
        <div class="form__group">
          <input type="text" class="form__input" id="name" placeholder="Code" required="" onChange={(e) => {this.handleChange(e)}}/>
          <label for="name" class="form__label">Code</label>
        </div>
      </h1>
    </>

  );
}

export default App;
