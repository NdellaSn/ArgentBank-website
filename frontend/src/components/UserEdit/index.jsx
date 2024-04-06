import { useState } from 'react'
import './useredit.css'
import { selectLogin } from '../../utils/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../features/user';



export default function UserEdit({ profile, setEdit }) {
    const [username, setUsername] = useState('');
    const login = useSelector(selectLogin);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Edit user info</h1>
            <form>
                <div className="input-user-edit">
                    <label htmlFor="#username">User name: {profile?.userName} </label>
                    <input type="text" id="username" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="input-user-edit">
                    <label >First name: </label>
                    <input type="text" disabled="disabled" value={profile?.firstName} />
                </div>
                <div className="input-user-edit">
                    <label >Last name: </label>
                    <input type="text" disabled="disabled" value={profile?.lastName} />
                </div>
            </form>
            <button className="save-button" onClick={() => saveProfile(dispatch, username,setEdit, login) }>Save</button>
            <button className="cancel-button" onClick={() => setEdit(false)}>Cancel</button>

        </div>
    )
}





const saveProfile = async (dispatch, username,setEdit, login) => {
    if(username === '')
    {
        return;
    }
    const urlServer = "http://localhost:3001/api/v1"

    const requestBody = JSON.stringify({
        "userName": username
    })
    const reponse = await fetch(urlServer + "/user/profile", {
        method: 'PUT',
        headers: {
            'Authorization': "Bearer " + login.token
        },
        body: requestBody
    });

    if (reponse.status === 200) {
        dispatch(getUser);
    }
    setEdit(false);
}
