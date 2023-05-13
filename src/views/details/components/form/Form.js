import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Form(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Details of {props.value.login}</Card.Title>
        <Card.Text>ID: {props.value.id}</Card.Text>
        <Card.Text>Login: {props.value.login}</Card.Text>
        <Card.Text>Link profile: {props.value.url}</Card.Text>
        <Card.Text>Created At: {moment(props.value.updated_at).format('YYYY-MM-DD')}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Form;