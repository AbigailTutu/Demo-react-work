import { useState } from "react";
import Edit from "./Edit";
import {useDispatch} from 'react-redux'
import { deleteComment } from "../../redux/slice";

/* eslint-disable react/prop-types */
const Comment = ({ com }) => {
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()

    const handleEdit = (e) => {
        e.preventDefault()
       setIsEdit(true)
    }

    const setIsEditToFalse = () => {
        setIsEdit(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteComment(id));
    }
  
  return (
    <div>
      {/** make sure to format with it the way you will it to display */}
      Name: {com.name} <br />
      Email: {com.mail} <br />
      comments: {com.comment}
      <button onClick={handleEdit}>Edit</button>
      <button onClick = {() => handleDelete(com.id)}>delete</button>
      {isEdit && <Edit com={com} setIsEditToFalse={setIsEditToFalse} />}
    </div>
  );
};

export default Comment;
