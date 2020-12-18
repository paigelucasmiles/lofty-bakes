import './App.css';

import IngredientForm from './components/IngredientForm'
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <h1>ELVTD KTCHN</h1>
      <h2>High Altitude Recipe Converter</h2>
      <IngredientForm />
    </div>
  );
}

export default App;
