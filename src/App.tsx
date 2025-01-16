import logo from './logo.svg';
import './App.css';
import { popup } from '@telegram-apps/sdk'

function App() {
  // const user = initData.user();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Telegram app!</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={async () => {
          popup.open({
            title: `Hello`,
            message: `Here is a test message`,
            buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
          });
        }}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
