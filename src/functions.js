export function getPayments(salary, procent = 0.13) {
  const paymentInOneYear = Math.round(salary * 12 * procent.toFixed(2))
  const yearsInOneValue = Math.ceil(260000 / paymentInOneYear).toString()
  const years = []
  for (let i = 1; i <= yearsInOneValue; i++) {
    years.push(i)
  }
  const payments = [];
  for (let i = 1; i < yearsInOneValue; i++) {
    payments.push(paymentInOneYear)
  }
  const lastPayment = 260000 % paymentInOneYear
  payments.push(lastPayment)
  return [{years, payments}]
}

