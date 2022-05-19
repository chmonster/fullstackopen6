import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { anecdoteCreated, clearOnTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(createAnecdote(content))
    dispatch(anecdoteCreated(content))
    setTimeout(() => {
      dispatch(clearOnTimeout())
    }, 5000)
  }

  return (
    <>
      <h2>Create New</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm