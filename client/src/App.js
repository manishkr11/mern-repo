
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import {Container} from 'reactstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Provider store={store}>
    <div className="App">
        <AppNavbar />
        <Container className="mod-con">
          <ShoppingList />
          <ItemModal />
        </Container>
      </div>
   </Provider>
  );
}

export default App;
