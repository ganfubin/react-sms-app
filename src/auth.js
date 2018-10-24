// 键值key = user
let auth = {
  getUserInfo(){
    if (document.cookie.length > 0) {
      let userIndex = document.cookie.indexOf("user=");
      if (userIndex != -1) {
        return unescape(document.cookie.substring(userIndex, document.cookie.indexOf(";", userIndex)))
      }
    }
    return false
  },
  setUserInfo(value){
    let exp = new Date();
    exp.setTime(exp.getTime() + 1 * 24 * 60 * 60 * 1000); //3天过期
    document.cookie = "user=" + encodeURIComponent(value)
        + ";expires=" + exp.toGMTString() + ";path=/";
    return true;
  }
};
export default auth