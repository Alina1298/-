import { getPayments } from "../functions";
const { v4: uuidv4 } = require("uuid");

export default function EarlyPayments({salaryValue, procent}) {
  return (
    <>
    <form>
    <label>Итого можете внести в качестве досрочных:</label>

    {salaryValue ?
     getPayments(salaryValue, procent)?.map((el) => 
     <div key={uuidv4()} style={{display:'flex'}}>
       
       
      <div>{el?.payments?.map((payment) => 
      <div key={uuidv4()} style={{display:'flex'}}>
          <input
          name="isGoing"
          type="checkbox" />

          <p>{payment} рублей&ensp;</p>
          </div>
          )}</div>
     
     <div>{el?.years?.map((year) => <p key={uuidv4()}>в {year}-й год</p>)}</div>
     </div>
      )
      : null}
      </form>
    </>
  )
}
