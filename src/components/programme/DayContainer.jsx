import ActivityHolder from "./ActivityHolder"

const dayContainer = (props) => {

    const times = ['Matin', 'Midi', 'Après midi', 'Fin après midi', 'Soirée', 'Nuit']




    return (
        <div className='flex-col w-full sm:max-w-fit '>
            <div className=' flex justify-center  rounded-t-lg'>
                {props.day}
            </div>
            <div className='flex-col space-y-[8px] p-1  rounded-b-lg'>
                {times.map(time => <ActivityHolder key={time} day={props.day} time={time} />)}
            </div>

        </div>
    )
}

export default dayContainer

