import { format } from "date-fns"
import ActivityHolder from "./ActivityHolder"

const DayContainer = (props) => {



    const times = [
        {
            id: 'matin',
            time: 'Matin'
        },
        {
            id: 'midi',
            time: 'Midi'
        },
        {
            id: 'apresmidi',
            time: 'Après midi'
        },
        {
            id: 'finapresmidi',
            time: 'Fin après midi'
        },
        {
            id: 'soiree',
            time: 'Soirée'
        },
        {
            id: 'nuit',
            time: 'Nuit'
        }
    ]





    return (
        <div className='flex-col w-full sm:max-w-fit '>
            <div className=' flex justify-center  rounded-t-lg'>
                {props.day}
            </div>
            <div className='flex-col space-y-[8px] p-1  rounded-b-lg'>
                {times.map(time => <ActivityHolder key={time.id + props.day} id={time.id + format(new Date(props.day), 'yyyy-MM-dd')} day={props.day} time={time.time} />)}
            </div>

        </div>
    )
}

export default DayContainer

