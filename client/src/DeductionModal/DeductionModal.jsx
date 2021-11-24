import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Input} from 'reactstrap';
import EarlyPayments from '../Earlypayments/Earlypayments';

export default function DeductionModal() {

   const [activeModal, setActiveModal] = useState(true);
   const [salaryValue, setSalaryValue] = useState('');
   const [payments, setPayments] = useState(null);
   const [count, setCount] = useState(0.13);

   useEffect(() => setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>),[count])

  return (
    <Modal isOpen={activeModal} toggle={() => setActiveModal(false)}> 
    <ModalHeader>Налоговый вычет</ModalHeader>
    <ModalBody>
    Используйте налоговый вычет, чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода
          <Form onSubmit={(e) => setSalaryValue(e.target.value)}>
          <h2>Ваша зарплата в месяц</h2>
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
        <button onClick={() => setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}>Рассчитать</button>
        {payments?
         payments : null }
        <h4>Что уменьшаем?</h4>
        <button onClick={() => {setCount(prev => prev - 0.02); setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}}>Платёж</button>
        <button onClick={() => {setCount(prev => prev + 0.02); setPayments(<EarlyPayments salaryValue={salaryValue} procent={count}/>)}}>Срок</button>            
       </ModalBody>
        <ModalFooter>
           <button onClick={() => setActiveModal(false)}>Добавить</button>
        </ModalFooter>
      </Modal>
      )
      }

 