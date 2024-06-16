import { useState, useEffect, useRef, useContext } from 'react'
import { MyContext } from '../App'
export default function InnerInput() {
	let [value, setValue] = useState('123')
  let ctx = useContext(MyContext)
  const { str, setStr } = ctx
  // console.log(str);
  // console.log(setStr);
  // setStr('222')
	return (
		<div className="flex mx-auto h-14 p-2">

			{value}
		</div>
	)
}