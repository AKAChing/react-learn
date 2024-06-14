import { useState, useEffect, useRef } from 'react'
import './css/index.css'
export default function App() {
	const [count, setCount] = useState(0)
	const [user, setUser] = useState({
		name: 'zhangsan',
		age: 18,
	})
	const handleClick = () => {
		// setCount(count + 1)
		// console.log(count);
		setUser({
			...user,
			name: user.age + 1,
		})
	}
	return (
		<div className="App">
			<div class="flex">
				<div class="flex-none w-14 h-14">01</div>
				<div class="flex-initial w-64 ...">02</div>
				<div class="flex-initial w-32 ...">03</div>
			</div>
		</div>
	)
}
