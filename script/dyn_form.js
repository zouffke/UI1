let dataList = document.getElementById("producten");
let str = "";

for (let i = 0; i < getRange(); i++) {
    str += '<option value="' + getNaam(i) + '" />';
}

dataList.innerHTML = str;