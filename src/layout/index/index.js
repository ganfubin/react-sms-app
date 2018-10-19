import React from 'react'
import Routers from '../../router'
import CommonHeader from '../../components/common/header'
import LayoutMenu from '../../components/common/menu'
import './index.less'


class layoutDefault extends React.Component {
    render() {
        return (
        <div className="layout-default">
           <CommonHeader />
            <div className="main-wrapper">
                <div className="menu">
                   <LayoutMenu/>
                </div>
                <div className="view">
                    <Routers/>
                </div>
            </div>
        </div>)
    }
}

export default layoutDefault