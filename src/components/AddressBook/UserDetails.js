import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const UserDetail = ({ user }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        { user && user?.name &&
          <h2>{user.name.first} - {user.name.last}</h2>
        }
      </ListGroup.Item>
    </ListGroup>
  );
};

export default UserDetail;
