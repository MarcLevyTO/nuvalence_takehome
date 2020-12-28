import React from "react";

import { StyledDetails } from './styled';

const UserDetail = ({ user }) => {
  return (
    <StyledDetails>
      { user && user?.name &&
          <div>
            <img src={user.picture.large} />

            <h1>{user.name.first} {user.name.last}</h1>
            
            <b>email</b>
            <p>{user.email}</p>

            <b>username</b>
            <p>{user.login.username}</p>

            <b>phone</b>
            <p>{user.phone}</p>

            <b>mobile</b>
            <p>{user.cell}</p>

            <b>location</b>
            <p>{user.location?.street?.number} {user.location?.street?.name}</p>
            <p>{user.location?.city}, {user.location?.state}, {user.location?.country}</p>
            <p>{user.location?.postcode}</p>
        </div>
      }
    </StyledDetails>
  );
};

export default UserDetail;
