import Styles from './OrientationWarning.module.css';

const OrientationWarning = () => {
    return (
        <div className={Styles.orientationWarning}>
            <p>Veuillez tourner votre appareil en mode paysage pour continuer.</p>
        </div>
    );
};

export default OrientationWarning;
