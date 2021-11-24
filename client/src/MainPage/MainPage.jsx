import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate('/deductionmodal')}>Налоговый вычет</Button>
  )
}
