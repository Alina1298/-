import { getYears, getPayments, getLastPayment } from "../functions"
export default function EarlyPayments() {
  return (
    <>
    <h3>Итого можете внести в качестве досрочных</h3>
    {getYears(50000).map(el => el.years.map(year => 
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
      {getPayments(50000)}рублей в {year}-й год
      </label>
      </div>)
    )}
      {getLastPayment(50000) ? 
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label" for="flexCheckDefault">
    {getLastPayment(50000)}рублей в {getYears(50000).map(el => el.yearsInLastValue)}-й год
    </label>
    </div>
      : null
      }
    </>
  )
}
