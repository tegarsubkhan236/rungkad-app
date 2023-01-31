import React from 'react';
import './index.css'
import {Layout, Avatar, Dropdown, Space} from "antd";
import {Fullscreen, Hamburger} from "../../../components";
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const {Header} = Layout

const LayoutHeader = () => {
    const items = [
        {
            key: 1,
            label: (
                <Link to={"/"}>
                    My Profile
                </Link>
            )
        }, {
            key: 2,
            label: (
                <Link to={"/login"}>
                    Logout
                </Link>
            )
        },
    ];

    return (
        <Header style={{ width: "100%" }}>
            <Hamburger/>
            <div className="right-menu">
                <Fullscreen/>
                <div className="dropdown-wrap">
                    <Dropdown menu={{items}} trigger={['click']}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Avatar shape="square" size="medium" icon={<UserOutlined/>} style={{backgroundColor: '#87d068'}}/>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
};

export default LayoutHeader;