import { filterAnecdotes } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    console.log('filter', event.target.value)
    dispatch(filterAnecdotes(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <>
      <h2>Filter Anecdotes</h2>
      <div style={style}>
        <input onChange={handleChange} />
      </div>
    </>
  )
}

export default Filter