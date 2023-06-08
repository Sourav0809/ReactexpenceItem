
import "../Components/ExpenceItem.css"
const ExpenceItem = () => {
    const expenceName = "Food"
    const expenceDate = new Date().toLocaleDateString()
    const expencePrice = 200
    return (
        <>
            <div className="expences">
                <div className="expenceitems"><h2>{expenceDate}</h2></div>
                <div className="expenceitems"><h2>{expenceName}</h2></div>
                <div className="expenceitems"><h2>{expencePrice}</h2></div>
            </div>

        </>
    )
}


export default ExpenceItem;