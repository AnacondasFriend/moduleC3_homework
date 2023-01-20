class PlugUnplug{
  constructor(name, power, plug){
    this.name = name,
    this.power = power,
    this.plug = true
  }  
  plugging(){
    this.plug = !this.plug;
    if (this.plug == true){
      console.log(`Устройство ${this.name} включено`);
    }
    else{
      console.log(`Устройство ${this.name} отключено`);
    }
  } 
}

class TV extends PlugUnplug {
  constructor(brand, name, power, diagonal, smart){
    super(name, power),
    this.brand = brand,
    this.name = name,
    this.power = power,
    this.memory = diagonal,
    this.smart = smart,
    this.plug = true
  }
}


class Iron  extends PlugUnplug{
  constructor(brand, name, power, form){
    super(name, power),
    this.brand = brand,
    this.name = name,
    this.power = power,
    this.form = form,
    this.plug = false
  }
}


const kitchenTV = new TV('Huawei', 'Kitchen TV', 500, 9, 'yes');

const ironForBed = new Iron('Philips','Philips Iron', 100, 'triangle');

kitchenTV.plugging();
console.log(ironForBed.plug)
ironForBed.plugging();
console.log(ironForBed.plug)
