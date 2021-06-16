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
          <Section text={"Test change"} />
          <Section text={"Test change 2"} />
        </div>
      </header>
    </div>
  );
}

export default App;
