//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setAnecdoteNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    props.createAnecdote(content)
    props.setAnecdoteNotification(content, 2)
  }

  return (
    <>
      <h2>Create New Anecdote</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

/*const mapStateToProps = (state) => {

}*/

const mapDispatchToProps = {
  createAnecdote,
  setAnecdoteNotification
}

const ConnectedAnecdotes = connect(()=>{}, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdotes

//export default AnecdoteForm