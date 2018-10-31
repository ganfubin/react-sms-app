import React from 'react';
import './index.less'
import {auth} from '@/utils'

class commonHeader extends React.Component {
    logOut = () => {
      auth.setUserInfo('');
      window.location.href = '/login'
    };
    render(){
        return (
            <div className="header">
                <div className="company-info">短信营销系统<span className="version">v1.0</span></div>
                <div className="user-info">
                    <div className="thumb">
                        <img src="//as.test.zbjdev.com/static/nodejs-caishui-admin-web/zbjimg.571c298.jpg"></img>
                    </div>
                    <span className="name-info">欢迎您，<label className="name">admin</label></span>
                    <a className="btn-login-out" onClick={this.logOut}>退出</a>
                </div>
            </div>
        )
    }

}

export default commonHeader