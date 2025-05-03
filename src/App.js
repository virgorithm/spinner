import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-6" >USER MANAGEMENT</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
