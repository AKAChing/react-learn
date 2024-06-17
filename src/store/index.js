import { configureStore } from '@reduxjs/toolkit'

import channelReducer from './modules/channelStore'
import commentReducer from './modules/commentStore'

const store = configureStore({
	reducer: {
		channel: channelReducer,
    comment: commentReducer
	},
})
// console.log(store.getState());
export default store