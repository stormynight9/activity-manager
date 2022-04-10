import ActivityHolder from "./ActivityHolder"

const dayContainer = (props) => {

    const times = ['Matin', 'Midi', 'Après midi', 'Fin après midi', 'Soirée', 'Nuit']




    return (
        <div className='flex-col w-full sm:max-w-fit pb-4 px-1npm sm:p-4'>
            <div className='p-4 bg-[#eaeceb] rounded-t-lg'>
                {props.day}
            </div>
            <div className='flex-col space-y-2 p-4 border-x-[1px] border-b-[1px] rounded-b-lg'>
                {times.map(time => <ActivityHolder key={time} day={props.day} time={time} />)}
            </div>

        </div>
    )
}

export default dayContainer

