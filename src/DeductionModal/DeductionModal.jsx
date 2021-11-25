import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Input} from 'reactstrap';
import EarlyPayments from '../Earlypayments/Earlypayments';
import styles from './styles.module.css'

export default function DeductionModal({activeModal, setActiveModal}) {

   const [salaryValue, setSalaryValue] = useState('');
   const [payments, setPayments] = useState(null);
   const [count, setCount] = useState(0.13);

   useEffect(() => 
   setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)
   ,[count])

  return (
    <Modal className={styles["modal-content"]} isOpen={activeModal} toggle={() => setActiveModal(false)}> 
    <ModalHeader>Налоговый вычет</ModalHeader>
    <ModalBody>
      <p className={styles.bodyModal}>
    Используйте налоговый вычет, чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода
      </p>
          <Form onSubmit={(e) => setSalaryValue(e.target.value)}>
          <h2 className={styles.textLeft}>Ваша зарплата в месяц</h2>
          <Input 
            id="salary"
            type="text"
            name="salary"
            placeholder='Введите данные'
            value={salaryValue}
            onChange={(e) => {setSalaryValue(e.target.value); setPayments(false)}}
              >
            </Input>
            </Form>
        <button className={styles.calculate} onClick={() => setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}>Рассчитать</button>
        {payments?
         payments : null }
         <div className={styles.bottom}>
        <h2 className={styles.textLeft}>Что уменьшаем?</h2>
        <div className={styles.paymentterm}>
        <button className={styles.payment} onClick={() => {setCount(prev => prev - 0.02); setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}}>Платёж</button>
        <button className={styles.term} onClick={() => {setCount(prev => prev + 0.02); setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}}>Срок</button>            
        </div>
        </div>
       </ModalBody>
        <ModalFooter>
           <button className={styles.buttonAdd} onClick={() => setActiveModal(false)}>Добавить</button>
        </ModalFooter>
      </Modal>
      )
      }

 