import { useNavigate } from "react-router-dom"

const CommencerButton = () => {
  const navigate = useNavigate()

  return <button onClick={() => navigate('/')} className="primary-button mt-8 px-4 py-3 tracking-wide" >
    COMMENCEZ VOTRE PROGRAMME
  </button>

}

export default CommencerButton