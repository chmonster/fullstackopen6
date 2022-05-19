import { useSelector } from 'react-redux'
//import { clearOnTimeout } from '../reducers/notificationReducer'
//import useEffect from "react";

const Notification = () => {
  const notification = useSelector(state => state.notification)
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

export default Notification