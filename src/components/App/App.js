import './App.css';
import '../recipe/recipe.js'
import Recipe from '../recipe/recipe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gonna make some biscuits
        </p>
        <a
          className="App-link"
          href="https://www.acceptcookies.uk/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;accept cookies&gt;
        </a>
        </header>

        <div className="page">
        <div className="recipe">{<Recipe/>}</div>
        </div>
        
    </div>
  );
}

export default App;
