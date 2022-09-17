import { useContext } from 'react';
import FirstContext from '../context/FirstContext';
import '../App.css';
import { useState } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
// import useLocalStorage from './hooks/useLocalStorage';

const Login = () => {
  const { createPerson } = useContext(FirstContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const history = useHistory();
  
  const goToFelicidade = () => {
    history.push('/felicidades');
  }

  function handleChange({ target: { name, value } }) {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

  };

  function handleSubmit(event) {
    event.preventDefault();

    const newPerson = ({
      name: user.name,
      email: user.email,
    })

    createPerson(newPerson);

    goToFelicidade();
  };

  return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">
            <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            id="user"
            value={user.name}
            onChange={handleChange}
            style={{ padding: '15px', marginRight: '15px'}}
          />
          </label>

          <label htmlFor="email">
            <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            id="email"
            value={user.email}
            onChange={handleChange}
            style={{ padding: '15px' }}
          />
          </label>

          <button 
            type="submit" 
            style={{ backgroundColor: 'blue', padding: '15px 30px', marginLeft: '20px'}}
          >
            Logar
          </button>
        </form>
        {user.name !== '' ? <p>Nome: {user.name}</p> : null}
        {user.email !== '' ? <p>Email: {user.email}</p> : null}
      </div>
  )
}

export default Login;
