import { createSlice } from '@reduxjs/toolkit'

const channelStore = createSlice({
	name: 'channel',
	initialState: {
		activeIndex: 1,
		channeList: [
			{
				id: 1,
				name: '最新',
			},
			{
				id: 2,
				name: '最热',
			},
		],
	},
	reducers: {
		setActive: (state, action) => {
			state.activeIndex = action.payload
		},
		setList: (state, action) => {
      console.log(action);
			state.channeList = action.payload
		},
	},
})
// console.log(channelStore);
const { setActive, setList } = channelStore.actions
const channelReducer = channelStore.reducer
export { setActive, setList }
export default channelReducer