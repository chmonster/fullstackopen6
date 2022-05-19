import { useDispatch, useSelector } from 'react-redux'
import { incVote } from '../reducers/anecdoteReducer'
import { voteRecorded, clearOnTimeout } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, incVote }) => {
  //const dispatch = useDispatch()
  //console.log('Anecdote', anecdote)
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes} votes
        <button onClick={incVote}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  console.log('AnecdoteList', anecdotes)
  return (
    <>
      <h2>Anecdote List</h2>
      {[ ...anecdotes ]
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote 
            key={anecdote.id}
            anecdote={anecdote}
            incVote={ ()=> {
              dispatch(incVote(anecdote.id)) 
              dispatch(voteRecorded(anecdote.content))
              setTimeout(() => {
                dispatch(clearOnTimeout())
              }, 5000)
            }}
          />       
        )}
    </>
  )
}
export default AnecdoteList