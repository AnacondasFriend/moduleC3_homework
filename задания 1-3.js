function printer(obj) {
  for (let key in obj) {
      console.log(` Ключ ${key} значение ${obj[key]}`);
  }
}


function check (str, obj) {
  return (str in obj);
}


function objectCreator() {
  return Object.create(null);
}


const objektik = {
  логин : 'mylogin',
  пароль : 'qwerty',
  цифра: 5
}

//Задание 1
printer (objektik)

//Задание 2
res = check('логин',objektik)

console.log(`Функция check вернула значение ${res}`)

//Задание 3
objectCreator()
