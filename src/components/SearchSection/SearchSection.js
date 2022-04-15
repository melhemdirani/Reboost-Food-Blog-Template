import './SearchSection.scss';


export default function SearchSection() {
    return (
        <>
            <div className="searchContainer">
                <center>
                    <div className="innerContainer">
                        <div className="search1">
                            <input type="search" name="recipe" id="recipe" placeholder="RECIPE" />
                        </div>
                        <div className="search2">
                            <input type="search" name="vegan" id="vegan" placeholder="VEGAN" />
                        </div>
                        <div className="search3">
                            <input type="search" name="ingredients" id="ingredients" placeholder="INGREDIENTS" />
                        </div>
                        <div className="searchbtn">
                            <button>SEARCH</button>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}