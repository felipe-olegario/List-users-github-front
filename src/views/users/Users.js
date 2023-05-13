import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button, Spinner } from 'react-bootstrap';
import service from '../../services/user'
import './Users.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [users, setUsers] = useState([]);
  const [since, setSince] = useState(0);
  const [loading, setloading] = useState('');

  useEffect(() => {
    setloading(
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
    fetchData();
  }, []);

  async function fetchData() {
    setSince(since + 10);
    try {
      const { data } = await service.listUsers(since);
      const formatedValue = data.map((user) => (
        <Link className="link" to={`/details/${user.login}`}><ListGroup.Item className='list-group-item'>{user.id} - {user.login}</ListGroup.Item></Link>
      ))
      formatedValue.push(users);
      setUsers(formatedValue)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container-users'>
    <Card>
      <Card.Header>USERS</Card.Header>
      <ListGroup variant="flush">
        {users.length ? users : loading}
      </ListGroup>
      <Card.Footer>
        <Button variant="dark" onClick={fetchData}>Show more</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}