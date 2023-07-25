import logo from './logo.svg';
import './App.css';
import Memo from './F8/Memo/Memo';
import CallbackHook from './F8/Callback Hook/CallBackHook';
import UseMemo from './F8/useMemo/UseMemo';
import UseReducer1 from './F8/useReducer/useReducer';
import ToDoApp from './F8/useReducer/ToDo/ToDoApp';
import UseContext from './F8/useContext/UseContext';
import { ThemeProvider } from './F8/useContext/ThemContext';
import {StoreProvider} from './F8/GlobalStateWithContextReducer/store';
import Store from './F8/GlobalStateWithContextReducer/store/Store';


function App() {
  return (
    <div className="App">
      {/* <Memo /> */}
      {/* <CallbackHook /> */}
      {/* <UseMemo /> */}
      {/* <UseReducer1 /> */}
      {/* <ToDoApp /> */}
      {/* <ThemeProvider>
          <UseContext />
      </ThemeProvider> */}
      <StoreProvider>
        <Store />
      </StoreProvider>
    </div>
  );
}

export default App;
