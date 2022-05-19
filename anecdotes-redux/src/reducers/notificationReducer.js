import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    voteRecorded(state, action) {
      const content = action.payload
      return `You voted for '${content}'`
    },
    anecdoteCreated(state, action) {
      const content = action.payload
      return `'${content}' added`     
    },
    clearOnTimeout(state, action){
      return null
    }
  },
})

export const { anecdoteCreated, voteRecorded, clearOnTimeout } = notificationSlice.actions
export default notificationSlice.reducer