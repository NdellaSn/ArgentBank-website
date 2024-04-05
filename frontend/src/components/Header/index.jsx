import logo from '../../assets/img/argentBankLogo.png'
import { Link } from "react-router-dom";
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from '../../utils/selectors';
import { singOut } from '../../features/login';

function Header() {

  const urlServer = "http://localhost:3001/api/v1"

  const getUser = async ()=>{
      const reponse = await fetch(urlServer + "/user/profile", {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer " + login.token
                }
            });

          console.log(reponse);
  }

  const login = useSelector(selectLogin)
  const dispatch = useDispatch()

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {
          login.isConnected &&
          <>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i> Tony
            </Link>

            <Link onClick={() => dispatch(singOut())} className="main-nav-item">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        }

        {
          !login.isConnected &&
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        }

      </div>
    </nav>
  )
}
export default Header