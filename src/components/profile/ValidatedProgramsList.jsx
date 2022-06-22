import { useContext } from "react"
import UserContext from "../../context/user-context"
import ValidatedProgram from "./ValidatedProgram"

const ValidatedProgramsList = () => {
    const userCtx = useContext(UserContext)
    console.log(userCtx.userDetails.validatedPrograms)

    if (userCtx.userDetails.validatedPrograms.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-gray-700">Vous n'avez pas de programme validé</h2>
            </div>
        )
    }


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