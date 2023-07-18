/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../redux/slice";
import {v4 as uuid} from 'uuid'
import Comment from "./comment";

const Comments = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [comment, setComment]= useState("")
  const [errmsg, setErrmsg] = useState("")

  const dispatch = useDispatch()
  const comments = useSelector((store) => store.comments.comments);
  //console.log(comments)
  
  const handleSave = (e) => {
    e.preventDefault()
    
    if (name === "" || mail === "" || comment === "") {
      setErrmsg("Name, Email, Comment connot be empty")
      return
    }

    const newComment = {id: uuid(), name, mail, comment}
    dispatch(createComment(newComment));

    /** Set the fields to empty after clicking on submit */
    setName("")
    setMail("")
    setComment("")
    setErrmsg("")
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Share your comments about the school
      </h1>

      <Form style={{ marginTop: "2rem", marginBottom: "11rem" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={{ width: "50rem" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="name@example.com"
            style={{ width: "50rem" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            style={{ width: "50rem" }}
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <div style={{color: "red"}}> 
            {errmsg}
        </div>

        <Button style={{ marginTop: "2rem" }} onClick={handleSave}>
          Save comment
        </Button>

        {/** I decided to use "ol" to display the commenst below the buttons in "li" that will render a different component called "component"*/}
        <br />
        <br />
        <ol style={{display: "flex", flexWrap: "wrap", gap: "4rem"}}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment com={comment}/> <br />
            </li>
            
          ))}
        </ol>
      </Form>
    </div>
  );
};

export default Comments;
