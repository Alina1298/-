import { useState } from 'react';
import DeductionModal from '../DeductionModal/DeductionModal';
import styles from './styles.module.css'

export default function MainPage() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => setActiveModal(true)}>Налоговый вычет</button>
      {activeModal ?
      <DeductionModal activeModal={activeModal} setActiveModal={setActiveModal}/> : null}
      </div>
  )
}
