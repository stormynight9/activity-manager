import Activity from "../components/Activity/Activity"
import Modal from "../components/shared/Modal"
import Sidebill from "../components/shared/Sidebill"

const ActivityPage = () => {
  return (
    <>
      <Activity />
      <Sidebill disappear={'2xl:mr-[28vw]'} />
    </>
  )
}

export default ActivityPage