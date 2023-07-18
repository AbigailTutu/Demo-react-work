import { useState } from "react";
import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/slice";
import { Button, Card } from "react-bootstrap";

/* eslint-disable react/prop-types */
const Comment = ({ com }) => {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const setIsEditToFalse = () => {
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <>
      <div>
        <Card
          style={{
            boxShadow: "0px 4px 33px -3px rgba(255,20,147,0.14)",
            width: "25rem",
            padding: "2rem 1.2rem",
            borderRadius: "1rem",
          }}
        >
          <Card.Body>
            <Card.Title>Edit Comment Here</Card.Title>
            <hr />
            <Card.Text>
              Name: {com.name} <br />
              Email: {com.mail} <br />
              Comments: {com.comment}
            </Card.Text>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#myModal"
              onClick={handleEdit}
            >
              Edit
            </button>
            <Button
              variant="danger"
              onClick={() => handleDelete(com.id)}
              style={{ marginLeft: "1rem" }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Update Comment
              </h4>
            </div>
            <div className="modal-body">
              {isEdit && <Edit com={com} setIsEditToFalse={setIsEditToFalse} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
