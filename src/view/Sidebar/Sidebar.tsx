import Styles from './Sidebar.module.css';

interface SidebarProps {
    clickCount: number;
    onRestart: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ clickCount, onRestart }) => {

    return (
        <div className={Styles.sidebar}>
            <div className={Styles.gameThem}>
                {/* <p>Choix du thème :</p> */}
                <div className={Styles.logoThem}>
                    <div className={Styles.frozenThem}></div>
                    <div className={Styles.dragonballThem}></div>
                    <div className={Styles.pokemonThem}></div>
                </div>
            </div>
            <div className={Styles.obtainedPairs}>
                Nombre de paire obtenues :
            </div>
            <div className={Styles.clicksNumber}>
                Nombre de clics : {clickCount}
            </div>
            <div className={Styles.restartGame} onClick={onRestart}>
                Recommencer la partie
            </div>
        </div >
    )
}

export default Sidebar;