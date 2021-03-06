import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import { StyledUserList } from './styled';

const UserList = ({ users, setUser }) => {
  const [selectedIndex, setIndex] = useState(0);

  const handleClick = (user, index) => {
    setIndex(index);
    setUser(user);
  };

  const listUsers = () => {
    if (!users || users.length < 1) {
      return <>Loading...</>;
    } else {
      return (
        <StyledUserList>
          { users.map((user, index) => (
              <ListGroup.Item key={index} active={selectedIndex === index} onClick={() => handleClick(user, index)}>
                <>
                  <p>{user.name.first} {user.name.last}</p>
                </>
              </ListGroup.Item>
          ))}
        </StyledUserList>
      );
    }
  }

  return (
    <ListGroup>{listUsers()}</ListGroup>
  );
};

export default UserList;