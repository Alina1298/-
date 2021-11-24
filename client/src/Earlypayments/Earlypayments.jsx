import { useState } from "react";
import { getPayments } from "../functions";
import styles from './styles.module.css';
const { v4: uuidv4 } = require("uuid");

export default function EarlyPayments({salaryValue, procent}) {

  const [checked, setChecked] = useState(false);
  
  return (
    <>
    {salaryValue ?
    <form>
    <label>Итого можете внести в качестве досрочных:</label>
     {getPayments(salaryValue, procent)?.map((el) => 
     <div key={uuidv4()} style={{display:'flex'}}>
       
       
      <div>{el?.payments?.map((payment) => 
      <div key={uuidv4()} style={{display:'flex'}}>
          <input
          name="isGoing"
          className={styles.checkbox}
          type="checkbox" />

          <p className={styles.text}>{payment} рублей&ensp;</p>
          </div>
          )}</div>
     
     <div>{el?.years?.map((year) => <p key={uuidv4()} className={styles.year}>в {year}-й год</p>)}</div>
     </div>
      )}
      </form>
      : null}
      
    </>
  )
}
