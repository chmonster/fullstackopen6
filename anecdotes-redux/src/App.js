import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect( ()=> {
    anecdoteService
      .getAll()
      .then(anecdotes =>{
        console.log('useEffect', anecdotes)
        dispatch(setAnecdotes(anecdotes))
      })
    }, [dispatch])

  return (
    <div>
      <Notification />
      <AnecdoteList />      
      <Filter />
      <AnecdoteForm />
    </div>
  )
}

export default App