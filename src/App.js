import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore} from './redux/configureStore'
import { render } from '@testing-library/react';
const store = ConfigureStore();


class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> dc79367dbe444d67a9c4895d696bc69adf2e2b62
