function printer(obj) {
  for (let key in obj) {
      console.log(` Ключ ${key} значение ${obj[key]}`);
  }
}

const objektik = {
  логин : 'mylogin',
  пароль : 'qwerty',
  цифра: 5
}

printer (objektik)
