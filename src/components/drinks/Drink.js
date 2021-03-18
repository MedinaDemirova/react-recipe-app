function Drink({ drink }) {
    return (
        <div className="drink-card">
            <img src={drink.image} alt="" />
            <div className="drink-card-label">
                {drink.label}
            </div>

        </div>
    )
}
export default Drink;