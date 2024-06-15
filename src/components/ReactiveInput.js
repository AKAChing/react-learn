import { useState, useEffect, useRef } from 'react'

export default function ReactiveInput({ inputChange }) {
	let [inputValue, setInputValue] = useState('')
	const inputRef = useRef(null)
	const getRef = () => {
    inputChange(inputValue)
		// console.log(inputRef.current?.value)
	}
	const change = e => {
		setInputValue(e.target.value)
	}
	useEffect(() => {
		// console.log('useEffect', inputValue)
	}, [inputValue])
	return (
		<div className="flex mx-auto h-14 p-2">
			<input
				className="border flex-1 p-2"
				ref={inputRef}
				type="text"
				value={inputValue}
				onChange={e => change(e)}
				placeholder="please input"
			/>
			<button
				className="flex justify-center items-center text-white bg-sky-600 w-36"
				onClick={getRef}
			>
				发送
			</button>
		</div>
	)
}
