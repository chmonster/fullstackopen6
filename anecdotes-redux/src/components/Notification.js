import { connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector(state => state.notification)
  const notification = props.notification
  console.log('Notification', notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = state => {
  return { notification: state.notification }
}

//export default Notification
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification