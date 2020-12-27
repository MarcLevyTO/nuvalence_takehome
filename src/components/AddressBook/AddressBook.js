import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import UserList from './UserList'

import { userService } from '../../_services'; 

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
    <div className="App">
      { !hasError && 
        <Container className="col-12 mt-3">
          <Row>
            <Col>
              <UserList users={users} setUser={setUser} />
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  { user && user?.name &&
                    <h2>{user.name.first} - {user.name.last}</h2>
                  }
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      }
      { hasError &&
        <Alert variant="danger">
          { errorMessage }
        </Alert>
      }
    </div>
  );
}

export { AddressBook };
