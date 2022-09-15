import { FaSearch, FaFacebook,FaHome,FaUserFriends,FaStore } from "react-icons/fa";
import { MdOutlinePersonalVideo } from "react-icons/md";

const header = () => {
	return (
		<div className="header">
<div className="hsb-1">
            <FaFacebook className="fa-3x"/>
            <i className="fa-brands fa-facebook fa-3x" ></i>
        </div>
        <div className="hsb-2">
            <FaSearch className="FaSearch"/>
            <input type="search" placeholder=" Search Facebook" className="hsb2-input"/>
        </div>

        <div className="hsb-3 ">
            <FaHome className="hsb-3-icon"/>
            <FaUserFriends className="hsb-3-icon"/>
            <MdOutlinePersonalVideo className="hsb-3-icon"/>
            <FaStore className="hsb-3-icon"/>

            <i className="fa-solid fa-store "></i>
            <i className="fa-solid fa-chess-board "></i>
        </div>

        <div className="hsb-4 ">

            <div type="" className="dp">
            <img src="./imgs/my-dp_1_50x50.jpg" alt="twitter DP" width={50} />
                {/* <img src="" alt="" className=""/> */}
                <p>Saad</p>
            </div>

            <div className="app-icon">
                <i className="fa-solid fa-braille "></i>
            </div>

            <div className="msg-icon">
                <i className="fa-brands fa-facebook-messenger "></i>
            </div>

            <div className="bell-icon">
                <i className="fa-solid fa-bell "></i>
            </div>

            <div className="drop-icon">
                <i className="fa-solid fa-caret-down"></i>
            </div>

        </div>

		</div>
	);
}

export default header;