import React from "react";
import "../styles.css";
import {WhatsAppOutlined,PhoneOutlined,CompassOutlined,ShareAltOutlined} from "@ant-design/icons"


const Banner1 = () => {
    return(<div className="Banner1" style={{fontSize:"75px",alignContent:"center"}}>
        <PhoneOutlined  />
        <CompassOutlined />
        <WhatsAppOutlined />
        <ShareAltOutlined />
    </div>);
}

export default Banner1;