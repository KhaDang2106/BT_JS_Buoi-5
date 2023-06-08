function only4Corporate() {
  var customerType = getEle('customerType').value;
  if (customerType === 'Doanh nghiệp') {
    colChange('col6_1', 'col-6', 'col-4');
    colChange('col6_2', 'col-6', 'col-4');
    getEle('col4_1').style.display = 'block';
  } else {
    colChange('col6_1', 'col-4', 'col-6');
    colChange('col6_2', 'col-4', 'col-6');
    getEle('col4_1').style.display = 'none';
  }
}

//format: VN
var numberFormat = new Intl.NumberFormat('VN-vn');
//format: US
var numberFormatUS = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

/*
  Bài 1: Quản lý tuyển sinh
*/
const ZONE_A = 2;
const ZONE_B = 1;
const ZONE_C = 0.5;

const CANDIDATE_1 = 2.5;
const CANDIDATE_2 = 1.5;
const CANDIDATE_3 = 1;

var totalMark = 0;
getEle('btnEx1').onclick = function () {
  //input: điểm chuẩn (number), điểm môn 1 (number), điểm môn 2 (number), điểm môn 3 (number), chọn điểm ưu tiên nếu có: khu vực (string), đối tượng (string)
  var benchMark = getEle('benchMark').value * 1;
  var firstMark = getEle('firstMark').value * 1;
  var secondMark = getEle('secondMark').value * 1;
  var thirdMark = getEle('thirdMark').value * 1;
  var priorityRegion = getEle('priorityRegion').value;
  var priorityCandidate = getEle('priorityCandidate').value;
  //output: kết quả (string)
  var ex1Result = '';
  //progress:
  totalMark = firstMark + secondMark + thirdMark;
  regionPlus(priorityRegion, ZONE_A, ZONE_B, ZONE_C);
  candidatePlus(priorityCandidate, CANDIDATE_1, CANDIDATE_2, CANDIDATE_3);
  if (firstMark > 0 && secondMark > 0 && thirdMark > 0) {
    totalMark >= benchMark
      ? (getEle('ex1Result').innerHTML =
          'Tổng điểm: ' +
          totalMark +
          ' - Chúc mừng bạn đã đậu! <i class="fa fa-smile-beam"></i>')
      : (getEle('ex1Result').innerHTML =
          'Tổng điểm: ' +
          totalMark +
          ' - Rất tiếc bạn đã rớt! <i class="fa fa-frown"></i>');
  } else {
    getEle('ex1Result').innerHTML =
      'Rất tiếc bạn đã rớt vì có môn nhỏ hơn hoặc bằng 0 điểm! <i class="fa fa-frown"></i>';
  }
  //in ra giao diện phần kết quả
  getEle('ex1Result').style.display = 'block';
};

/*
  Bài 2: Tính tiền điện
*/
const ELEC_FEE_1 = 500;
const ELEC_FEE_2 = 650;
const ELEC_FEE_3 = 850;
const ELEC_FEE_4 = 1100;
const ELEC_FEE_5 = 1300;

var elecBill = 0;

getEle('btnEx2').onclick = function () {
  //input: họ tên (string), số kw điện (number)
  var fullNameEx2 = getEle('fullNameEx2').value;
  var kw = getEle('kw').value * 1;
  //output: tiền điện (number), kết quả (string)
  var ex2Result = '';
  //progress:
  chargingElec(kw, ELEC_FEE_1, ELEC_FEE_2, ELEC_FEE_3, ELEC_FEE_4, ELEC_FEE_5);
  //in ra giao diện phần kết quả
  ex2Result =
    'Họ tên: ' +
    fullNameEx2 +
    '<br>Tiền điện: ' +
    elecBill.toLocaleString() +
    'VND';
  getEle('ex2Result').innerHTML = ex2Result;
  getEle('ex2Result').style.display = 'block';
};

/*
  Bài 3: Tính thuế thu nhập cá nhân
*/
const TAXRATE_1 = 5 / 100;
const TAXRATE_2 = 10 / 100;
const TAXRATE_3 = 15 / 100;
const TAXRATE_4 = 20 / 100;
const TAXRATE_5 = 25 / 100;
const TAXRATE_6 = 30 / 100;
const TAXRATE_7 = 35 / 100;

const TAXEXEMPTION = 4e6;
const DEPENDENTDEDUCTION = 1.6e6;

var taxFee = 0;

function taxCalc() {
  //input: họ tên (string), tổng thu nhập năm (number), số người phụ thuộc (number)
  var fullNameEx3 = getEle('fullNameEx3').value;
  var annualIncome = getEle('annualIncome').value * 1;
  var dependent = getEle('dependent').value * 1;
  //output: tiền thuế (number), kết quả (string)
  var ex3Result = '';
  //progress:
  var taxableIncome =
    annualIncome - TAXEXEMPTION - dependent * DEPENDENTDEDUCTION;
  taxCheckOut(taxableIncome);
  //in ra giao diện phần kết quả
  ex3Result =
    'Họ tên: ' +
    fullNameEx3 +
    '<br>Tiền thuế thu nhập cá nhân: ' +
    numberFormat.format(taxFee) +
    'VND';
  getEle('ex3Result').innerHTML = ex3Result;
  getEle('ex3Result').style.display = 'block';
}

/*
  Bài 4: Tính tiền cáp
*/
const PERSONAL_BILL_FEE = 4.5;
const PERSONAL_SERVICE_FEE = 20.5;
const PERSONAL_CHANNEL_FEE = 7.5;

const CORP_BILL_FEE = 15;
const CORP_CONNECT_FIRST10 = 75;
const CORP_CONNECT_AFTER10TH = 5;
const CORP_CHANNEL_FEE = 50;

var cableFee = 0;

function cableCalc() {
  //input: chọn loại khách hàng (string), mã khách hàng (string), số kênh (number), số kết nối (number)
  var customerType = getEle('customerType').value;
  var customerID = getEle('customerID').value;
  var premiumChannel = getEle('premiumChannel').value * 1;
  var connection = getEle('connection').value * 1;
  //output: mã khách hàng (string), tiền cáp (number)
  var ex4Result = '';
  //progress:
  switch (customerType) {
    case 'Nhà dân':
      cableCheckOut(
        PERSONAL_BILL_FEE,
        PERSONAL_SERVICE_FEE,
        PERSONAL_CHANNEL_FEE,
        premiumChannel
      );
      break;
    case 'Doanh nghiệp':
      cableCheckOut(
        CORP_BILL_FEE,
        corpServiceFee(connection),
        CORP_CHANNEL_FEE,
        premiumChannel
      );
      break;
    default:
      alert('Vui lòng chọn loại khách hàng!');
      cableFee = 0;
  }
  //in ra giao diện phần kết quả
  ex4Result =
    'Loại khách hàng: ' +
    customerType +
    '<br> Mã khách hàng: ' +
    customerID +
    '<br> Tiền cáp: ' +
    numberFormatUS.format(cableFee);
  getEle('ex4Result').innerHTML = ex4Result;
  getEle('ex4Result').style.display = 'block';
}
