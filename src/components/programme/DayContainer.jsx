import ActivityHolder from "../home/ActivityHolder"

const dayContainer = (props) => {

    const dayParts = ['Morning', 'Midday', 'Afternoon', 'Late afternoon', 'Evening', 'Night']

    return (
        <div className='flex-col w-full sm:max-w-fit pb-4 px-1npm sm:p-4'>
            <div className='p-4 bg-[#eaeceb] rounded-t-lg'>
                {props.day}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 p-4 border-x-[1px] border-b-[1px] rounded-b-lg'>
                {dayParts.map(dayPart => <ActivityHolder key={dayPart} dayPart={dayPart} />)}
            </div>

        </div>
    )
}

export default dayContainer