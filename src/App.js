import { Provider } from 'react-redux';
import './App.css';
import MovieClick from './Component/MovieWebsite/MovieClick';
import Store from "./Redux/Store"

function App() {
  return (< Provider store={Store}>
    <MovieClick/>
    </Provider>
  );
}

export default App;
