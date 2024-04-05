import { useDispatch, useSelector } from 'react-redux';
import './User.css'
import { selectLogin, selectUserProfile } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Acount from '../../components/Acount';
import { getUser } from '../../features/user';



function User() {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();
  const profile = useSelector(selectUserProfile)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!login.isConnected) {
      navigate("/login");
    }
    dispatch(getUser)

  }, [login, navigate, dispatch])


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profile?.firstName} {profile?.lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <Acount title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Acount title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Acount title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
  
    </main>
  )
}
export default User