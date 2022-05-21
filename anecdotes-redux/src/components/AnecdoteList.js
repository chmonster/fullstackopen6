import { useDispatch, useSelector } from 'react-redux'
import { incVote } from '../reducers/anecdoteReducer'
import { setVoteNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, incVote }) => {
  return (
    <div>
      <div>
        {content}
      </div>
      <div>
        has {votes} votes
        <button onClick={incVote}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotesFiltered = useSelector (({ filterString, anecdotes }) => { 
    console.log('filter', filterString, 'anecdotes', anecdotes)
    if (filterString !== '') {
      return anecdotes.filter(anecdote => 
        anecdote.content.toLowerCase().includes(filterString.toLowerCase())
      )
    } else {
      return anecdotes
    }
  })

  console.log('anecdotesFiltered', anecdotesFiltered)
  return (
    <>
      <h2>Anecdote List</h2>
      {[...anecdotesFiltered]
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote 
            key={anecdote.id}
            content={anecdote.content}
            votes={anecdote.votes}
            incVote={ ()=> {
              dispatch(incVote(anecdote.id)) 
              dispatch(setVoteNotification(anecdote.content, 3))
            }}
          />       
        )
      }
    </>
  )
}
export default AnecdoteList