function PlugUnplug(name, power, plug){
  this.name = name,
  this.power = power,
  this.plug = true,
    
  this.plugging = function(){
    this.plug = !this.plug;
    if (this.plug == true){
      console.log(`Устройство ${this.name} включено`);
    }
    else{
      console.log(`Устройство ${this.name} отключено`);
    }
  } 
}

function TV( brand, name, power, diagonal, smart){
  this.brand = brand,
  this.name = name,
  this.power = power,
  this.memory = diagonal,
  this.smart = smart,
  this.plug = true
}

TV.prototype = new PlugUnplug()

function Iron (brand, name, power, form){
  this.brand = brand,
  this.name = name,
  this.power = power,
  this.form = form,
  this.plug = false
}

Iron.prototype = new PlugUnplug();

const kitchenTV = new TV('Huawei', 'Kitchen TV', 500, 9, 'yes');

const ironForBed = new Iron('Philips','Philips Iron', 100, 'triangle');

kitchenTV.plugging();
console.log(ironForBed.plug)
ironForBed.plugging();
console.log(ironForBed.plug)
