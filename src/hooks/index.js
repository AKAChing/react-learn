import { useState, useEffect } from 'react'
import axios from 'axios'
export const useToggle = () => {
	const [value, setValue] = useState(true)
	const toggle = () => setValue(!value)
	return { value, toggle }
}

export const useGetCommentList = () => {
	const [commentList, setCommentList] = useState([])
	useEffect(() => {
		const getCommentList = async () => {
			const res = await axios.get('http://localhost:5000/comments')
			setCommentList(res.data)
			// console.log(res)
		}
    getCommentList()
	}, [])

	return { commentList, setCommentList }
}

export const useAddComment = (data) => {
	const [addComment, setAddComment] = useState([])
	const add = async () => {
		const res = await axios.post('http://localhost:5000/comments', data)
		setAddComment(res.data)
	}
	useEffect(() => {
		// add()
	}, [])

	return { addComment, setAddComment, add }
}