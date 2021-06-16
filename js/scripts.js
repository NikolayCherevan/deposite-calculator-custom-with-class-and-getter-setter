class DepositCalculate {
  constructor(
    dolarCurrency,
    euroCurrency,
    uahCurrency,
    dolarPercentage,
    euroPercentage,
    uahPercentage) {
    this.dolarCurrency = dolarCurrency;
    this.euroCurrency = euroCurrency;
    this.uahCurrency = uahCurrency;
    this.dolarPercentage = dolarPercentage;
    this.euroPercentage = euroPercentage;
    this.uahPercentage = uahPercentage;
    this.term = null;
    this.name = null;
    this.depositResult = null;
    this.depositSum = null;
    this.activeCurrency = null;
    this.currentPercentage = null;
  }
  getTermDays(term) {
    return term * this.getDaysInYear() / 12;
  }
  getDaysInYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    return (Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) - Date.UTC(start.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  }
  getdepositResult(depositSum, percentage, term, daysInYear) {
    return ((depositSum * percentage * term) / daysInYear)/100;
  }
  /**
   * @param {number} newValue
   */
  set setTerm(newValue) {
    this.term = newValue;
  }
  /**
  * @param {number} newValue
  */
  set setPercentage(newValue) {
    this.currentPercentage = newValue
  }
  /**
   * @param {string} newValue
   */
  set setName(newValue) {
    this.name = newValue;
  }
  /**
   * @param {number} newValue
   */
  set setDepositSum(newValue) {
    this.depositSum = newValue;
  }
  /**
   * @param {number} newValue
   */
  set setActiveCurrency(newValue) {
    this.activeCurrency = newValue;
  }

  get setTerm() {
    return this.term;
  }

  get setName() {
    return this.name;
  }

  get setDepositSum() {
    return this.depositSum;
  }

  get setActiveCurrency() {
    return this.activeCurrency;
  }
  get setPercentage() {
    return this.currentPercentage;
  }
}

function setEventListenersValue() {
  document.getElementById('name').addEventListener('change', function (event) {
    calculate.setName = event.target.value
  });
  document.querySelectorAll('[name="currency"]').forEach(item => {
    item.addEventListener('change', function (event) {
      calculate.setActiveCurrency = event.target.value
      let currency = calculate.setActiveCurrency;
      switch (true) {
        case currency === 'dollar': {
          return calculate.setPercentage = 5;
        }
        case currency === 'uah': {
          return calculate.setPercentage = 10;
        }
        case currency === 'euro': {
          return calculate.setPercentage = 5;
        }
      }

    })
  })
  document.querySelectorAll('[name="term"]').forEach(item => {
    item.addEventListener('change', function (event) {
      calculate.setTerm = event.target.value
    })
  })
  document.getElementById('sum_of_deposite').addEventListener('change', function (event) {
    calculate.setDepositSum = event.target.value
  });
  document.getElementById('get_deposit_result').addEventListener('click', function (event) {
    if (!calculate.setName || !calculate.setDepositSum || !calculate.setActiveCurrency || !calculate.setTerm) {
      alert('есть незаполненные поля')
      return
    }
    else {
      document.querySelector('.deposit_result_finally').innerHTML =
      ` ${calculate.getdepositResult(calculate.setDepositSum,
         calculate.setPercentage, 
         calculate.getTermDays(calculate.setTerm),
          calculate.getDaysInYear())} ${calculate.setActiveCurrency}`
      document.querySelector('.customer_name').innerHTML = calculate.setName;
    }
  });
}
let calculate = new DepositCalculate(27, 30, 1, 5, 5, 10);
setEventListenersValue()
