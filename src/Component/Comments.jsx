/* eslint-disable no-unused-vars */
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Comments = () => {
  return (
    <div>
    <h1 style={{textAlign: "center"}}>Share your comments about the school</h1>

    <Form style={{marginTop: "2rem", marginBottom: "11rem"}}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" style={{width: "50rem"}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" style={{width: "50rem"}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Your comment</Form.Label>
      <Form.Control as="textarea" rows={3} style={{width: "50rem"}}/>
    </Form.Group>
    <Button style={{marginTop: "2rem"}}>Save comment</Button>
  </Form>
    </div>
  )
}

export default Comments
