import ".//Notifications.css";
import {useEffect} from "react"



function Notifications({ errors, setErrors }) {

    useEffect(() => { setTimeout(() => {  setErrors([])  }, 10000)  },[errors]);


    return (
        <div className="notifications">
            {errors ? errors.map(error => <div className="errors-notification">{error}</div>) : null}
        </div>
        
    )
}

export default Notifications;