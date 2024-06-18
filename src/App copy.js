import { createContext, useContext, useState, useEffect, useRef } from 'react'
import CommentList from './components/CommentList'
import ReactiveInput from './components/ReactiveInput'
import ReactiveForm from './components/ReactiveForm'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export const MyContext = createContext()
export default function App() {
	// let now = dayjs().format('MM-DD HH:mm')
	// let fromNow = dayjs('2024-06-17').fromNow()
	// console.log(now);
	const [str, setStr] = useState('888')
	// const AkachingContext = createContext()
	const handleChange = e => {
		setStr(e)
		// console.log(str)
	}
	const myfn = () => {
		console.log('myfn')
	}
	useEffect(() => {
		
	}, [str])
	return (
		<div className="App">
			{/* <div>{str}</div> */}
			<MyContext.Provider value={{str, setStr, myfn}}>
				<ReactiveForm></ReactiveForm>
				<ReactiveInput
					inputChange={handleChange}
					name={new Date()}
					defaultValue={'akaching'}
					arr={[1, 2, 3]}
					obj={{ name: 'akaching', age: 18 }}
					span={<span className="text-white">发送</span>}
				>
				</ReactiveInput>
			</MyContext.Provider>
			<CommentList></CommentList>
		</div>
	)
}


