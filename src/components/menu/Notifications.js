import ".//Notifications.css";

function Notifications({ errors, setErrors }) {
    return (
        <div className="notifications">
            {errors ? errors.map(error => <div className="errors-notification">{error}</div>) : null}
           
        </div>

    )
}

export default Notifications;