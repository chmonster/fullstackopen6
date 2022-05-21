import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState, 
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote (state, action) {
      const changedAnecdote = action.payload
      return state.map(anecdote => 
          anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, updateAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  } 
}

export const createAnecdote = content =>  {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const incVote = id => {
  return async dispatch => {
    const anecdote = await anecdoteService.get(id)
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes+1 }
    const response = await anecdoteService.update(id, updatedAnecdote)
    dispatch(updateAnecdote(response))
  }
}

export default anecdoteSlice.reducer