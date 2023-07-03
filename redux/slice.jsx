import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    { id: 1, name: "Man", mail: "aed@gmail.com", comment: "LNLKBLKB" },
  ],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    createComment: (state, { payload }) => {
      state.comments.push(payload);
    },
    updateComment: (state, {payload}) => {
        const {name, mail, comment} = payload
        const updatedComment = state.comments.find(comment => comment.id === payload.id)
        if(updatedComment){
            updatedComment.name = name
            updatedComment.mail = mail
            updatedComment.comment = comment

        }
    },
    deleteComment: (state, {payload}) => {
        state.comments = state.comments.filter(comment => comment.id !== payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { createComment, updateComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
