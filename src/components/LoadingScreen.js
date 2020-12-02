import Loader from '../images/loader.gif';

const LoadingScreen = () => {
    return(
        <div className="loading">
            <img src={Loader} alt="loader icon" className="loader-gif" />           
        </div>
    );
}

export default LoadingScreen;