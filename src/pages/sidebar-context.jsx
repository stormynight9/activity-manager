import { createContext, useState } from 'react'

const SidebarContext = createContext({
    bookedActivitiesCount: 0,
    setBookedActivitiesCount: () => { },
})

export const SidebarContextProvider = (props) => {
    const [bookedActivitiesCount, setBookedActivitiesCount] = useState(0)

    return (
        <SidebarContext.Provider value={{
            bookedActivitiesCount: bookedActivitiesCount,
            setBookedActivitiesCount: setBookedActivitiesCount,
        }}>
            {props.children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext
