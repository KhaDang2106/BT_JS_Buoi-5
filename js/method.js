//hàm DOM tới id
function getEle(id) {
  return document.getElementById(id);
}
//hàm đổi kích cỡ cột cho bài 4
function colChange(id, class1, class2) {
  document.getElementById(id).classList.replace(class1, class2);
}

//Bài 1: Quản lý tuyển sinh
//hàm điểm cộng khu vực ưu tiên
function regionPlus(priorityRegion, regionPlus1, regionPlus2, regionPlus3) {
  switch (priorityRegion) {
    case 'A':
      totalMark += regionPlus1;
      break;
    case 'B':
      totalMark += regionPlus2;
      break;
    case 'C':
      totalMark += regionPlus3;
      break;
    default:
      totalMark += 0;
  }
}
//hàm điểm cộng đối tượng ưu tiên
function candidatePlus(
  priorityCandidate,
  candidatePlus1,
  candidatePlus2,
  candidatePlus3
) {
  switch (priorityCandidate) {
    case '1':
      totalMark += candidatePlus1;
      break;
    case '2':
      totalMark += candidatePlus2;
      break;
    case '3':
      totalMark += candidatePlus3;
      break;
    default:
      totalMark += 0;
  }
}

//Bài 2: Tính tiền điện
function chargingFee_1(kw, elecFee_1) {
  return kw * elecFee_1;
}
function chargingFee_2(kw, elecFee_2) {
  return (kw - 50) * elecFee_2;
}
function chargingFee_3(kw, elecFee_3) {
  return (kw - 100) * elecFee_3;
}
function chargingFee_4(kw, elecFee_4) {
  return (kw - 200) * elecFee_4;
}
function chargingFee_5(kw, elecFee_5) {
  return (kw - 350) * elecFee_5;
}
//hàm tính tiền điện
function chargingElec(
  kw,
  elecFee_1,
  elecFee_2,
  elecFee_3,
  elecFee_4,
  elecFee_5
) {
  if (0 < kw && kw <= 50) {
    elecBill = chargingFee_1(kw, elecFee_1);
  } else if (50 < kw && kw <= 100) {
    elecBill = chargingFee_1(50, elecFee_1) + chargingFee_2(kw, elecFee_2);
  } else if (100 < kw && kw <= 200) {
    elecBill =
      chargingFee_1(50, elecFee_1) +
      chargingFee_2(100, elecFee_2) +
      chargingFee_3(kw, elecFee_3);
  } else if (200 < kw && kw <= 350) {
    elecBill =
      chargingFee_1(50, elecFee_1) +
      chargingFee_2(100, elecFee_2) +
      chargingFee_3(200, elecFee_3) +
      chargingFee_4(kw, elecFee_4);
  } else if (350 < kw) {
    elecBill =
      chargingFee_1(50, elecFee_1) +
      chargingFee_2(100, elecFee_2) +
      chargingFee_3(200, elecFee_3) +
      chargingFee_4(350, elecFee_4) +
      chargingFee_5(kw, elecFee_5);
  } else {
    alert('Số Kw điện không hợp lệ! Vui lòng nhập lại!');
    elecBill = 0;
  }
}

//Bài 3: Tính tiền thuế thu nhập cá nhân
//hàm tính tiền thuế TNCN
function taxCheckOut(taxableIncome) {
  if (0 < taxableIncome && taxableIncome <= 60e6) {
    taxFee = taxableIncome * TAXRATE_1;
  } else if (60e6 < taxableIncome && taxableIncome <= 120e6) {
    taxFee = taxableIncome * TAXRATE_2;
  } else if (120e6 < taxableIncome && taxableIncome <= 210e6) {
    taxFee = taxableIncome * TAXRATE_3;
  } else if (210e6 < taxableIncome && taxableIncome <= 384e6) {
    taxFee = taxableIncome * TAXRATE_4;
  } else if (384e6 < taxableIncome && taxableIncome <= 624e6) {
    taxFee = taxableIncome * TAXRATE_5;
  } else if (624e6 < taxableIncome && taxableIncome <= 960e6) {
    taxFee = taxableIncome * TAXRATE_6;
  } else if (960e6 < taxableIncome) {
    taxFee = taxableIncome * TAXRATE_7;
  } else {
    alert('Số tiền thu nhập không hợp lệ! Vui lòng nhập lại!');
    taxFee = 0;
  }
}

//Bài 4: Tính tiền cáp
//hàm tính phí dịch vụ cho DN
function corpServiceFee(connection) {
  var corpServiceFee = 0;
  // if (connection <= 10) {
  //   corpServiceFee = CORP_CONNECT_FIRST10;
  // } else {
  //   corpServiceFee =
  //     CORP_CONNECT_FIRST10 + (connection - 10) * CORP_CONNECT_AFTER10TH;
  // }
  connection <= 10
    ? (corpServiceFee = CORP_CONNECT_FIRST10)
    : (corpServiceFee =
        CORP_CONNECT_FIRST10 + (connection - 10) * CORP_CONNECT_AFTER10TH);
  return corpServiceFee;
}
//hàm tính tiền cáp
function cableCheckOut(billFee, serviceFee, channelFee, channel) {
  cableFee = billFee + serviceFee + channelFee * channel;
}
