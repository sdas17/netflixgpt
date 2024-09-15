import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import appstore from './utiles/appStore';
function App() {
  return (
   <>
   <Provider  store={appstore}>
   < Body/>
   </Provider>
   </>
  );
}

export default App;
