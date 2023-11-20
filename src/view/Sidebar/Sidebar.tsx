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
                Score : {pairsFound} / 10
            </div>
            <div className={Styles.clicksNumber}>
                Clics : {clickCount}
            </div>
            <div className={Styles.restartGame} onClick={onRestart}>
                RESTART
            </div>
        </div >
    )
}

export default Sidebar;