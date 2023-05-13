import { Table, Card } from 'react-bootstrap';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Card>
      <Card.Body>
      <Card.Title>Repositories</Card.Title>
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {props.value.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.git_url}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
