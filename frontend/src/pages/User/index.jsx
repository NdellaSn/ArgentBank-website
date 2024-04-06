import { useDispatch, useSelector } from 'react-redux';
import './User.css'
import { selectLogin, selectUserProfile } from '../../utils/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Acount from '../../components/Acount';
import { getUser } from '../../features/user';
import UserEdit from '../../components/UserEdit';



function User() {
    const login = useSelector(selectLogin);
    const navigate = useNavigate();
    const profile = useSelector(selectUserProfile)
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (!login.isConnected) {
            navigate("/");
        }
        dispatch(getUser)

    }, [login, navigate, dispatch])


    return (
        <main className="main bg-dark">
            <div className="header">
                {
                    !edit &&
                    <>
                        <h1>Welcome back<br />{profile?.firstName} {profile?.lastName}</h1>
                        <button className="edit-button" onClick={() => setEdit(true)} >Edit Name</button>
                    </>
                }
                {edit && <UserEdit profile={profile} setEdit={setEdit} />}


            </div>
            <h2 className="sr-only">Accounts</h2>

            <Acount title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
            <Acount title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
            <Acount title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />

        </main>
    )
}
export default User