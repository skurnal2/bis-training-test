import BisLogo from '../images/company_logo.png';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header>
                <img src={BisLogo} alt="BIS Training Solutions Logo" className="company-logo" />
            </header>
            <div className="sub-heading">
                <h2><FaUserAlt/> Users List</h2>
            </div>
        </>
    );
}

export default Header;