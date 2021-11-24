export function getYears(salary) {
  let paymentInOneYear = salary * 12 * 0.13
  let yearsInOneValue = Math.floor(260000 / paymentInOneYear).toString()
  let yearsInLastValue = Math.ceil(260000 / paymentInOneYear)
  let years = []
  for (let i = 1; i <= yearsInOneValue; i++) {
    years.push(i)
  }
  return [{years, yearsInLastValue}]
}

export function getPayments(salary) {
  let paymentInOneYear = salary * 12 * 0.13
  return paymentInOneYear
}

export function getLastPayment(salary) {
  let paymentInOneYear = salary * 12 * 0.13
  let lastPayment = 260000 % paymentInOneYear
  return lastPayment
}

