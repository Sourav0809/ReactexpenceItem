import './ExpenceDate.css'
import Card from '../UI/Card'
const ExpenceDate = (props) => {
    const month = props.Date.toLocaleString('en-US', { month: 'long' })
    const day = props.Date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.Date.getFullYear()
    return <div className="expence_date">
        <Card>
            <h2 className='expence_date__year'>{year}</h2>
            <h2 className='expence_date__month'>{month}</h2>
            <h2 className='expence_date__day'>{day}</h2>
        </Card>
    </div>
}



export default ExpenceDate;