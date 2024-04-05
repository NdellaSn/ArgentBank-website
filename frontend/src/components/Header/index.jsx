import logo from '../../assets/img/argentBankLogo.png'
import { Link } from "react-router-dom";
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin, selectUserProfile } from '../../utils/selectors';
import { singOut } from '../../features/login';
import { useEffect } from 'react';
import { getUser } from '../../features/user';

function Header() {


  const login = useSelector(selectLogin)
  const profile = useSelector(selectUserProfile)
  const dispatch = useDispatch()


  useEffect(() => {
    if(login.isConnected)
    {
      dispatch(getUser)
    }
  }, [dispatch, login])

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
              <i className="fa fa-user-circle"></i> {profile?.firstName}
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