/* eslint-disable react/prop-types */

import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { updateComment } from '../../redux/slice';

const Edit = ({ com, setIsEditToFalse }) => {
  const [name, setName] = useState(com.name);
  const [mail, setMail] = useState(com.mail);
  const [comment, setComment] = useState(com.comment);

  const dispatch = useDispatch();

  const handleSave = (id) => {
    const updateddata = { id: id, name, mail, comment };
    dispatch(updateComment(updateddata));
    setIsEditToFalse;
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      &nbsp; &nbsp;
      <input
        type="text"
        name="mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />{" "}
      &nbsp; &nbsp;
      <input
        type="textarea"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={() => handleSave(com.id)}>Save</button>
    </div>
  );
};

export default Edit
