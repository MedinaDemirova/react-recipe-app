import { Link } from "react-router-dom";

function Dessert({ dessert}) {

    return (

        <div className="dessert-card"  >
            <Link to={`/desserts/${dessert.label}`} >
                <img src={dessert.image} alt="dessert" />

                <div className="dessert-card-label">
                    {dessert.label}
                </div>
            </Link>
        </div>

    )
}
export default Dessert;