import Styles from './Sidebar.module.css';

interface SidebarProps {
    clickCount: number;
    pairsFound: number;
    onRestart: () => void;
    onThemeChange: (theme: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ clickCount, pairsFound, onRestart, onThemeChange }) => {

    return (
        <div className={Styles.sidebar}>
            <div className={Styles.gameThem}>
                <span>Thème</span>
                <div className={Styles.logoThem}>
                    <div
                        className={Styles.frozenThem}
                        onClick={() => onThemeChange('frozen')}
                    ></div>
                    <div
                        className={Styles.dragonballThem}
                        onClick={() => onThemeChange('dragonball')}
                    ></div>
                    <div
                        className={Styles.pokemonThem}
                        onClick={() => onThemeChange('pokemon')}
                    ></div>
                </div>
            </div>
            <div className={Styles.obtainedPairs}>
                <span>Score</span>
                <span>{pairsFound}/10</span>
            </div>
            <div className={Styles.clicksNumber}>
                <span>Clics</span>
                <span>{clickCount}</span>
            </div>
            <div className={Styles.restartGame} onClick={onRestart}>
                <img className={Styles.restartImg} src="/images/rejouer.png" alt="image recommencer" />
            </div>
        </div >
    )
}

export default Sidebar;