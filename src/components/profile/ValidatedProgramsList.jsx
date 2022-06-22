import { useContext } from "react"
import UserContext from "../../context/user-context"
import ValidatedProgram from "./ValidatedProgram"

const ValidatedProgramsList = () => {
    const userCtx = useContext(UserContext)
    console.log(userCtx.userDetails.validatedPrograms)

    if (userCtx.userDetails.validatedPrograms === undefined || userCtx.userDetails.validatedPrograms?.length === 0) {
        return (
            <div className="flex flex-col  p-4 text-center bg-white w-full h-full">
                <div className="my-auto flex flex-col items-center">
                    <img className='w-52 mb-6' src="https://firebasestorage.googleapis.com/v0/b/pfe-95fff.appspot.com/o/undraw_clean_up_re_504g.svg?alt=media&token=36194c29-3b6d-4980-b500-c5fa1e3481df" alt="empty" />

                    <h2 className="text-xl font-medium text-gray-900">Vous n'avez pas de programmes validés</h2>
                </div>
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