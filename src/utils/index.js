import React from 'react'

const LoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

let auth = {
  getUserInfo(){
    let cookies = this.getCookies();
    return cookies['user'];
  },
  setUserInfo(value){
    let exp = new Date();
    exp.setTime(exp.getTime() + 1 * 60 * 60 * 1000); //2小时过期
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


export   {
  LoadingComponent,
  auth
}