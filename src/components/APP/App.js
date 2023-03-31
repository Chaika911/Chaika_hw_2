import ChildrenComponents from '../ChildrenComponents';
import JsxExemples from '../JsxExemples';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world</h1>  {/*Завдання 5*/}

        <JsxExemples name="Hello-props"/> {/*Завдання 3*/}
        <JsxExemples name={"WORLD-props"}/>


      </header>

      <main>
        <ChildrenComponents> {/*Завдання 4*/}
          <span>
            <span>This is a children text</span>
          </span>
        </ChildrenComponents>


      </main>


    </div>
  );
}

export default App;

