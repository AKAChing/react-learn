import { useContext } from 'react'
import CommentList from './components/CommentList'
import ReactiveInput from './components/ReactiveInput'

export default function App() {
	const akaching = useContext('akaching')
	const handleChange = (e) => {
		console.log(e)
	}
	return (
		<div className="App">
			<ReactiveInput inputChange={handleChange}></ReactiveInput>
			<CommentList></CommentList>
		</div>
	)
}
