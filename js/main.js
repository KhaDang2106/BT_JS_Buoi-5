function only4Business() {
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

//Method
function getEle(id) {
  return document.getElementById(id);
}
function colChange(id, class1, class2) {
  document.getElementById(id).classList.replace(class1, class2);
}
