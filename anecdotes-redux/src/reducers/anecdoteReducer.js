import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (content) => {
  return {
    content: content,
    id: getId(),
    votes: 0
  }
}

const initialState = { 
  unfiltered: anecdotesAtStart.map(asObject),
  filter: ''
}
//const initialState = anecdotesAtStart.map(asObject)
console.log('initialState', initialState)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState, 
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.unfiltered.push({
        content,
        votes: 0,
        id: getId()
      })
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
      
    }
  }
})

export const { createAnecdote, incVote, filterAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer