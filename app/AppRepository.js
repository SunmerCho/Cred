let instance = null;
var title = '';
var name = '';
var dateOfBirth = '';
var MobileNumber = '';
var EmialAddress = '';

export default class AppRepository {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  static ShareInstance() {
    let singleton = new AppStatusManager();
    return singleton;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}