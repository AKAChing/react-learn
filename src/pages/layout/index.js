import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
	return (
		<div>
			<div className="flex justify-between">
				<div className="p-2">
					<Link to="/">home</Link>
				</div>
				<div className="p-2">
					<Link to="/login">login</Link>
				</div>
				<div className="p-2">
					<Link to="/register">register</Link>
				</div>
				<div className="p-2">
					<Link to="/comment">comment</Link>
				</div>
			</div>
			<div className="container mx-auto">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
