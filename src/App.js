import logo from './logo.svg';
import './App.css';
import Section from './Section.js';
import './bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mike's Site
        <div class="container">
          <Section text={"Text1"} />
          <Section text={"Text2"} />
        </div>
      </header>
    </div>
  );
}

export default App;
