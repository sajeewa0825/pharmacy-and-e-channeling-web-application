import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import loca from "../../../component/NavBar/image/location-dot-solid.svg";
import clockIcon from "../../../component/NavBar/image/clock-solid.svg";

const Head = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row bg-dark ">
                    <div class="col-12 d-flex justify-content-center ">
                        <ul className="details">
                            <li>
                                <img className="iconNav" src={LocalPhoneIcon} />
                                <span className="iconNavText">Hotline: +0123456789</span>
                            </li>
                            <li>
                                <img className="iconNav" src={loca} />
                                <span className="iconNavText">Address: No3, Badulla</span>
                            </li>
                            <li>
                                <img className="iconNav" src={clockIcon} />
                                <span className="iconNavText">Mon-Sat 8.00am-8.00pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head;