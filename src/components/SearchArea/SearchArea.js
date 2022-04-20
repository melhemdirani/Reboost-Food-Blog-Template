import "./SearchArea.scss";


export default function SearchArea() {
    return (
        <>
            <div className="SearchArea">
                <center>
                    <section>
                        <input type="text" placeholder="RECIPE" />
                        <input type="text" placeholder="VEGAN" />
                        <input type="text" placeholder="INGREDIENTS" />
                        <input type="submit" value="Search" />
                    </section>
                </center>
            </div>
        </>
    );
}