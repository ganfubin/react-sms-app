// 键值key = user
let auth = {
  getUserInfo(){
    let cookies = this.getCookies();
    return cookies['user'];
  },
  setUserInfo(value){
    let exp = new Date();
    exp.setTime(exp.getTime() + 1 * 24 * 60 * 60 * 1000); //24小时过期
    document.cookie = "user=" + encodeURIComponent(value)
        + ";expires=" + exp.toGMTString() + ";path=/";
    return true;
  },
  getCookies(){
    let cookie = document.cookie || '';
    cookie = cookie.split(';');
    let obj = {};
    cookie.forEach((item) => {
      let arr = item.split('=');
      obj[arr[0]] = arr[1];
    });
    return obj
  }
};
export default auth