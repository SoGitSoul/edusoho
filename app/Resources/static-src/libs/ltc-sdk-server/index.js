// import 'babel-polyfill';
// import 'jquery';
// import * as cd from 'codeages-design';
// import '!style-loader!css-loader!less-loader!codeages-design/src/less/codeages-design.less';
import Api from './api';
import * as components from './component';
import EsMessenger from 'app/common/messenger';

class LtcSDKServer {
  constructor() {
    this.options = {};
    this.handler = {};
    this.isVerify = false;
    this.messenger = null;
  }

  passport() {
    // 需替换成真实的验证机制
    // if (this.options.appId == '123456') {
    //   console.log('验证成功');
    // } else {
    //   throw new Error('验证身份失败');
    // }
  
    if (this.options.apiList instanceof Array) {
      this.options.apiList.forEach((item) => {
        if (!this[item]) {
          throw new Error('不存在 ' + item + ' 接口');
        }
      });
    }

    this.isVerify = true;
  }

  getMessenger(children = []) {

   return (this.messenger === null) ? new EsMessenger({
      name: 'parent',
      project: 'LtcProject',
      children: children,
      type: 'parent'
    }) : this.messenger;
   }

  verify() {
    if (!this.isVerify) {
      throw new Error('请先调用config方法，验证身份');
    }
  }

  config(options) {
    let DEFAULTS = {
      apiList: [],
      appId: null,
    }

    Object.assign(this.options, DEFAULTS, options);
  
    this.passport();
  
    return this;
  }

  getApi(options) {
    this.verify();
    return Api(options);
  }

  getUi() {
    this.verify();
    return Object.assign(
      {}, 
      // cd, 
      components
    );
  }
}

let ltcsdk = new LtcSDKServer();

module.exports = window.ltcsdkserver = ltcsdk;