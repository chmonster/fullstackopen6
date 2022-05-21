import { createSlice } from '@reduxjs/toolkit'

const initialState = null

let timeoutID = null

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

export const setAnecdoteNotification = (content, duration) =>  {
  return dispatch => {
    dispatch(anecdoteCreated(content))
    timeoutID = setTimeout(() => {
      dispatch(clearOnTimeout())
    }, duration*1000)
  }
}

export const setVoteNotification = (content, duration) =>  { 
  return dispatch => {
    dispatch(voteRecorded(content))
    if(timeoutID){
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      dispatch(clearOnTimeout())
    }, duration*1000)
  }
}

export default notificationSlice.reducer