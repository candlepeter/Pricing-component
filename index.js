let toggleBtn = document.querySelector(".inner");
const price = document.querySelectorAll(".price");
const checkBox = document.getElementById("check");

function toggle() {
  
  if (checkBox.checked === true) {
    toggleBtn.classList.add('change');
    checkBox.classList.add('change');

    price[0].innerHTML = `<span>$</span> 19.99`;
    price[1].innerHTML = `<span>$</span> 24.99`;
    price[2].innerHTML = `<span>$</span> 39.99`;
  } else {
    toggleBtn.classList.remove('change');
    checkBox.classList.remove('change');
    
    price[0].innerHTML = `<span>$</span> 199.99`;
    price[1].innerHTML = `<span>$</span> 249.99`;
    price[2].innerHTML = `<span>$</span> 399.99`;
  }


};

checkBox.addEventListener("change", toggle);