export default class HelloService {

  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    return this.name;
  }

}
