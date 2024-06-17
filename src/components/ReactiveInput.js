import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export default function ReactiveInput(props) {
	let [inputValue, setInputValue] = useState(props.defaultValue || '')
	const inputRef = useRef(null)
	const getRef = () => {
		props.inputChange(inputValue)
		setInputValue('')
		inputRef.current.focus()
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
