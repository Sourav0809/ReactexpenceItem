import './ExpenceDate.css'
const ExpenceDate = (props) => {
    const date = props.Date.toLocaleString('en-US', { month: 'long' })
    const month = props.Date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.Date.getFullYear()
    return <div className="expence_date">
        <h2>{date}</h2>
        <h2>{month}</h2>
        <h2>{year}</h2>
    </div>
}



export default ExpenceDate;