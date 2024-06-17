import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const commentStore = createSlice({
	name: 'channel',
	initialState: {
		commentList: [],
	},
	reducers: {
		setCommentList: (state, action) => {
			state.commentList = action.payload
		},
	},
})

const getCommentList = () => {
	return async dispath => {
		const res = await axios.get('http://localhost:5000/comments')
		dispath(setCommentList(res.data))
	}
}

const deleteCommentById = id => {
	return async dispath => {
		await axios.delete(`http://localhost:5000/comments/${id}`)
		dispath(getCommentList())
	}
}

const createComment = data => {
	return async dispath => {
		await axios.post(`http://localhost:5000/comments`, data)
		dispath(getCommentList())
	}
}

const { setCommentList } = commentStore.actions
const commentReducer = commentStore.reducer
export { setCommentList, getCommentList, deleteCommentById, createComment }
export default commentReducer
// console.log(commentStore);
