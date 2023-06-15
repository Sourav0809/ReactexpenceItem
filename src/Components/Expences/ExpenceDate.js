import './ExpenceDate.css'
import Card from '../UI/Card'
const ExpenceDate = (props) => {
    const month = props.Date.toLocaleString('en-US', { month: 'long' })
    const day = props.Date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.Date.getFullYear()
    return <div className="expence_date">
        <Card>
            <div className='expence_date__year'>{year}</div>
            <div className='expence_date__month'>{month}</div>
            <div className='expence_date__day'>{day}</div>
        </Card>
    </div>
}



export default ExpenceDate;