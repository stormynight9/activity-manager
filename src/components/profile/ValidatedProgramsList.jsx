import { useContext } from "react"
import UserContext from "../../context/user-context"
import ValidatedProgram from "./ValidatedProgram"

const ValidatedProgramsList = () => {
    const userCtx = useContext(UserContext)
    console.log(userCtx.userDetails.validatedPrograms)

    return (
        <div className='flex flex-col space-y-2 divide-y-[1px] bg-gray-50'>
            {userCtx.userDetails.validatedPrograms.map((programId) => {
                return (
                    <ValidatedProgram key={programId} programId={programId} />
                )
            }
            )}
        </div>
    )
}

export default ValidatedProgramsList