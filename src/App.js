import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheRoutes from './routes/Routes';
import { AuthContextWrapper } from './Context/AuthContextWrapper';


function App() {
  return (
    <div className="App">
      <AuthContextWrapper>
        <TheRoutes />
      </AuthContextWrapper>
    </div>
  );
}

export default App;
