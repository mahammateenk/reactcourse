import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';
import EmailContextProvider from './context/emailContextProvider';

function App() {
  return (
    <UserContextProvider>
      <EmailContextProvider>
        <h1>React video for contect api</h1>
    <Login/>
    <Profile/>
      </EmailContextProvider>
 

    </UserContextProvider>
  );
}

export default App;
