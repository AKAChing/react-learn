import { useState, useEffect, useRef } from 'react'
import comment from '../data/comment'
import classNames from 'classnames'
export default function CommentList(props) {
	const tabList = [
		{
			id: 1,
			name: '最新',
		},
		{
			id: 2,
			name: '最热',
		},
	]
	const [commentList, setCommentList] = useState(comment)
	const [activeTab, setActiveTab] = useState(1)
	const deleteComment = id => {
		// props.myfn()
		if (window.confirm('确定要删除吗?')) {
			const newData = commentList.filter(item => {
				return item.id !== id
			})
			setCommentList(newData)
		}
	}
	useEffect(() => {
		// console.log(activeTab)
	}, [activeTab, commentList])
	const tabChange = index => {
		setActiveTab(index)
		setCommentList(
			commentList.sort((a, b) => {
				if (activeTab === 1) {
					return b.id - a.id
				} else {
					return a.id - b.id
				}
			})
		)
	}
	return (
		<div className="App">
			{/* {props.str} */}
			<div className="flex flex-col">
				<div className="flex m-2 text-sm cursor-pointer items-center">
					{tabList.map(tab => (
						<div
							className={classNames({
								'ml-2': tab.id === 2,
								'text-lg': activeTab === tab.id,
							})}
							key={tab.id}
							onClick={index => tabChange(tab.id)}
						>
							最新
						</div>
					))}
				</div>
				{commentList.map(comment => (
					<div
						className="flex flex-col border-solid border rounded-md p-2 m-1"
						key={comment.id}
					>
						<div className="flex justify-between align-middle mb-2">
							<div className="text-sm">{comment.name}</div>
							<div className="text-sm">{comment.id}</div>
						</div>
						<div className="flex justify-between align-middle">
							<div
								className={classNames('text-md', {
									truncate: comment.id === 2,
								})}
							>
								{comment.content}
							</div>
						</div>
						<div className="flex justify-between align-middle">
							<div className="flex align-middle text-sm mt-2">
								<div>{comment.like}</div>
								{
									<div
										className="ml-2"
										onClick={id => deleteComment(comment.id)}
									>
										删除
									</div>
								}
							</div>
							<div>{comment.date}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
