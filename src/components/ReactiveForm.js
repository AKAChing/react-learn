import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../store/modules/commentStore'

const ReactiveForm = () => {
	const dispatch = useDispatch()
	let [formData, setFormData] = useState({
		name: '',
		content: '',
	})
	const handleSetValue = (value, key) => {
		setFormData({ ...formData, [key]: value })
	}
	const add = async () => {
		for (const key of Object.keys(formData)) {
			console.log(formData[key]);
			if (!formData[key]) {
				alert(`请输入${key}`)
				return
			}
		}
		dispatch(createComment(formData))
		setFormData({
			name: '',
			content: '',
		})
	}
	useEffect(() => {}, [formData])
	return (
		<div className="p-2">
			<div className="flex items-center mb-2">
				<div className="flex-none text-sm mr-2">姓名</div>
				<input
					type="text"
					className="flex-1 border border-gray-300 rounded-md p-1"
					value={formData.name}
					onChange={(e, key) => handleSetValue(e.target.value, 'name')}
				/>
			</div>
			<div className="flex items-center mb-2">
				<div className="flex-none text-sm mr-2">评论</div>
				<input
					type="text"
					className="flex-1 border border-gray-300 rounded-md p-1"
					value={formData.content}
					onChange={(e, key) => handleSetValue(e.target.value, 'content')}
				/>
			</div>
			<div className="flex items-center mb-2">
				<button
					className="flex-1 p-2 rounded-md text-white bg-sky-600"
					onClick={add}
				>
					提交
				</button>
			</div>
		</div>
	)
}

export default ReactiveForm