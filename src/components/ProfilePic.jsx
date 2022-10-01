import React from 'react';
import image from "./Images/user.png"
import "./styles/ProfilePic.css"
export const ProfilePic = ({img_url}) => {
  const photo = img_url ?? image
  return (
    <React.Fragment>
      <div className='gris'>
      </div>
      <div className='container-div'>
        <img className="edit" src={photo} />
      </div>
    </React.Fragment>
  )
}


export default ProfilePic