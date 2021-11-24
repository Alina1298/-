import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'

export default function MainPage() {
  const navigate = useNavigate()
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => navigate('/deductionmodal')}>Налоговый вычет</button>
      </div>
  )
}
