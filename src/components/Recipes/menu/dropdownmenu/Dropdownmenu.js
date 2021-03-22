
import './/Dropdownmenu.css'

function Dropdownmenu({ setSearchCategory }) {
    function setSearchCategoryFunc(e) {
        e.preventDefault();
        console.log(e.target.value)
        setSearchCategory(e.target.value);
    }



    return (
        <div className="dropdown">
            <button className="dropbtn">Category</button>
            <div className="dropdown-content">
                <option onClick={setSearchCategoryFunc} value="Breakfast">Breakfast</ option>
                <option onClick={setSearchCategoryFunc} value="Lunch">Lunch</option>
                <option onClick={setSearchCategoryFunc} value="Dinner">Dinner</option>
                <option onClick={setSearchCategoryFunc} value="Snack">Snack</option>
                <option onClick={setSearchCategoryFunc} value="Teatime">Teatime</option>
            </div>
        </div>
    )
}

export default Dropdownmenu;