import { setFilter } from '../reducers/filterReducer'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'


const Filter = (props) => {
  //const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    console.log('filter', event.target.value)
    //dispatch(setFilter(event.target.value))
    props.setFilter(event.target.value)
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

const mapDispatchToProps = {
  setFilter
}

const ConnectedAnecdotes = connect(()=>{}, mapDispatchToProps)(Filter)
export default ConnectedAnecdotes

//export default Filter
