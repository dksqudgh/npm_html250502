 const menuItems = document.querySelectorAll('#menu li');
  //console.log(menuItems);//한가지 타입만 있다.
  //console.log(menuItems.length);//한가지 타입만 있다.
  const menuItems2 = document.querySelectorAll('li');
  //console.log('문자열 : '+menuItems2);//두가지 타입이 있다.
  //console.log('문자열 : '+menuItems2.length);//두가지 타입이 있다.

  menuItems2.forEach((element, index) => {
    console.log(element, index);
    element.addEventListener('click', function (event) {
      if(this.style.backgroundColor === 'gray'){
        this.style.background = 'white';
      }else{
        this.style.background = 'gray';
      }
    });
  });






