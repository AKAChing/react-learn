import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function ReactiveInput(props) {
	let [inputValue, setInputValue] = useState(props.defaultValue || '')
	const inputRef = useRef(null)
	// console.log(props)
	const getRef = () => {
		props.inputChange(inputValue)
		// inputChange(inputValue)
		setInputValue('')
		inputRef.current.focus()
		// console.log(inputRef.current);
	}
	const change = e => {
		setInputValue(e.target.value)
	}
	useEffect(() => {
		// inputRef.current.focus()
		// console.log('useEffect', inputValue)
	}, [inputValue])
	return (
		<div>
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
					{props.span}
					{/* {props.children} */}
					{/* 发送 */}
				</button>
			</div>

			<div>{props.children}</div>
		</div>
	)
}

ReactiveInput.propTypes = {
	span: PropTypes.element,
	inputChange: PropTypes.func.isRequired,
	defaultValue: PropTypes.string,
}
