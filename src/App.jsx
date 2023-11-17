import './App.css';
import { LoadingComponent } from './components/loading';
import { ErrorComponent } from './components/error';
import { DataComponent } from './components/data';

function App() {
  return (
    <div className="container">
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

export default App;

