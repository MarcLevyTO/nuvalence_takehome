import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserList from './UserList';
import UserDetail from './UserDetails';

import { userService } from '../../_services';

import { StyledAddressBook } from './styled';

function AddressBook() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load users
  useEffect(() => {
    const fetchData = async () => {
      try {
        let users = await userService.loadUsers();
        setUsers(users);
        setUser(users[0]);
      } catch (error) {
        setErrorMessage(error.message);
        setHasError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      { hasError &&
        <Alert variant="danger">
          { errorMessage }
        </Alert>
      }
      { !hasError && 
          <StyledAddressBook>
            <UserList users={users} setUser={setUser} />
            <UserDetail user={user} />
          </StyledAddressBook>
      }
    </>
  );
}

export { AddressBook };
