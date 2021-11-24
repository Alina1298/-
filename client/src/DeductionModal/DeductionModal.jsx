import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input} from 'reactstrap';
import EarlyPayments from '../Earlypayments/Earlypayments';

export default function DeductionModal() {

   const [active, setActive] = useState(true);

  return (
    <Modal isOpen={active} toggle={() => setActive(false)}> 
    <ModalHeader>Налоговый вычет</ModalHeader>
    <ModalBody>
    Используйте налоговый вычет, чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода
          <Form>
          <Label for="salary">Ваша зарплата в месяц</Label>
          <Input 
            id="salary"
            type="text"
             name="salary"
            placeholder='Введите данные'
              >
            </Input>
            </Form>
        <button type="submit">Рассчитать</button>
        <EarlyPayments/>
        <h4>Что уменьшаем?</h4>
        <button>Платёж</button>
        <button>Срок</button>            
       </ModalBody>
        <ModalFooter>
           <button onClick={() => setActive(false)}>Добавить</button>
        </ModalFooter>
      </Modal>
      )
      }

 