import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from '@/store'
import { router, RouterProvider } from '@/router'
import { Provider } from 'react-redux'
import Layout from './pages/layout/index'
import '@/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<Layout/>
			</RouterProvider>
			{/* <App /> */}
		</Provider>
	</React.StrictMode>
)
