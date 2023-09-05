import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>AbukiKs Social.</h1>
          <p>
          Join our community and embark on a journey of endless possibilities. Register today to access a world of features, connections, and opportunities. Experience a seamless and secure registration process that sets you on the path to discovering all that our platform has to offer.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h3>Register</h3>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;