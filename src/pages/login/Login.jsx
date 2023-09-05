import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Welcome to Our Platform.</h1>
          <p>
          Discover a seamless login experience that ensures your security and convenience. Join us to access a world of possibilities, where your journey begins with a secure login process.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h3>Login</h3>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;