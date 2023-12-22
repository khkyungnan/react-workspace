import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import YTBAPI from './YTBAPI';
//import Counter from './ReducerCount';
//.Provider :해당 컴포넌트를
//통해서 ThemeContext 안에 있는
//컴포넌트 들한테 객체 값을 공유하고
//읽을 수 있도록 해줌
function App() {
  return (
    <div>
      <YTBAPI />
    </div>
  );
}

export default App;
