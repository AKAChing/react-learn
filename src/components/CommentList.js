import { useEffect} from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../store/modules/channelStore'
import { getCommentList, deleteCommentById } from '../store/modules/commentStore'
export default function CommentList(props) {
	const { activeIndex, channeList } = useSelector(state => state.channel)
	const { commentList } = useSelector(state => state.comment)
	const dispatch = useDispatch()
	const deleteComment = id => {
		console.log(id);
		if (window.confirm('确定要删除吗?')) {
			dispatch(deleteCommentById(id))
		}
	}
	useEffect(() => {
		dispatch(getCommentList())
	}, [activeIndex, dispatch])
	const tabChange = index => {
		dispatch(setActive(index))
		// dispatch(setList(commentList))
		// setActiveTab(index)
		// setCommentList(
		// 	commentList.sort((a, b) => {
		// 		if (activeTab === 1) {
		// 			return b.id - a.id
		// 		} else {
		// 			return a.id - b.id
		// 		}
		// 	})
		// )
	}
	return (
		<div className="App">
			{/* {props.str} */}
			<div className="flex flex-col">
				<div className="flex m-2 text-sm cursor-pointer items-center">
					{channeList.map(tab => (
						<div
							className={classNames({
								'ml-2': tab.id !== 1,
								'text-lg': activeIndex === tab.id,
							})}
							key={tab.id}
							onClick={index => tabChange(tab.id)}
						>
							{tab.name}
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
