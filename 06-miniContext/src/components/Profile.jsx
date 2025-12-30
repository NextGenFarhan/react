import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'


function Profile() {

    const {User} = useContext(UserContext)

    if(!User)
        return (<div style={{textAlign:'center', font:'bold 20px Arial'}}>please login</div>);

    return (<div style={{textAlign:'center', font:'bold 20px Arial'}}>Welcome {User.username}</div>)
}

export default Profile;