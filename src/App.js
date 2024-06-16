import { createContext, useContext, useState, useEffect } from 'react'
import CommentList from './components/CommentList'
import ReactiveInput from './components/ReactiveInput'
import InnerInput from './components/InnerInput'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export const MyContext = createContext()
export default function App() {
	// let now = dayjs().format('MM-DD HH:mm')
	// let fromNow = dayjs('2024-06-17').fromNow()
	// console.log(now);
	let [str, setStr] = useState('888')
	// const AkachingContext = createContext()
	const handleChange = e => {
		setStr(e)
		// console.log(str)
	}
	const myfn = () => {
		console.log('myfn')
	}
	useEffect(() => {
		// console.log(str)
		// inputRef.current.focus()
		// console.log('useEffect', inputValue)
	}, [str])
	return (
		<div className="App">
			<div>{str}</div>
			<MyContext.Provider value={{str, setStr}}>
				<ReactiveInput
					inputChange={handleChange}
					name={new Date()}
					defaultValue={'akaching'}
					arr={[1, 2, 3]}
					obj={{ name: 'akaching', age: 18 }}
					span={<span className="text-white">发送</span>}
				>
					{/* <div className="text-black"><span>akaching</span></div> */}
					<InnerInput></InnerInput>
				</ReactiveInput>
			</MyContext.Provider>

			<CommentList str={str} myfn={myfn}></CommentList>
		</div>
	)
}
