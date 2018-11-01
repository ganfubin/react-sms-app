import React from 'react'
import {auth} from '@/utils'


const authCookie = (Wrapper) => class extends React.Component {
  componentDidMount() {
    let userInfo = auth.getUserInfo();
    auth.setUserInfo(userInfo)
  }

  render() {
    return <Wrapper {...this.props} />;
  }
};

const title = (Wrapper) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    let title = document.title;
    this.setState({
      title
    });
    document.title = this.props.title || '短信营销系统';
  }

  componentWillMount() {
    document.title = this.state.title || '短信营销系统';
  }

  render() {
    return <Wrapper {...this.props} />;
  }
};

export {
  authCookie,
  title
}