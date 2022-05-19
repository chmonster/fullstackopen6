import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
  unfiltered: [], 
  filter: ''
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState, 
  reducers: {
    createAnecdote(state, action) {
      console.log('createAnecdote', action.payload)
      state.unfiltered.push(action.payload)
    },
    incVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.unfiltered.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return {
        unfiltered: state.unfiltered.map(anecdote => 
          anecdote.id !== id ? anecdote : changedAnecdote        
        ),
        filter: state.filter
      }
    },
    filterAnecdotes(state, action) {
      const filterTerm = action.payload
      return {
        unfiltered: state.unfiltered, 
        filter: filterTerm
      }
    },
    setAnecdotes(state, action) {
      return {
        unfiltered: action.payload,
        filter: state.filter
      }
    }
  }
})

export const { createAnecdote, incVote, filterAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer