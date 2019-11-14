// 
import moment from 'moment'
const getDatesFromArray = (array = [], date) => {
    if(date){
        const filtered = array.filter(el => moment(el.bookedFor).isSame(moment(date), "day"))
        return filtered.map(el => {
            const {
                available, booked, bookedFor
            } = el
            if(available && !booked)
            return moment(bookedFor).format("hh:mm a")

            return null
        })
    }
    return []
}

export default getDatesFromArray