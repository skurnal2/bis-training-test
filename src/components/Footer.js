import { FaCopyright, FaFileAlt, FaCode, FaCertificate } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <footer>
                <span><FaCopyright/> 2020</span>
                <a href="http://www.google.com"><FaFileAlt/> Terms and Conditions</a>
                <a href="http://www.google.com"><FaCode/> System Requirements</a>
                <a href="http://www.google.com"><FaCertificate/> Certificate Verification</a>
            </footer>
        </>
    );
}

export default Header;