import styles from './BetSlip.module.css';
import Button from '@mui/material/Button';
import { Interfaces } from '../../interfaces/Interfaces';

function BetSlip(props: Interfaces.Market) {
    return (
        <div className={styles.BetSlip}>
            <div className={styles.cardbody}>
                <div className={styles.cardTitle}>{props.name}</div>
            </div>
            <div className={styles.cardfooter}>
                {props.selections.map((item: Interfaces.Selection) => {
                    return (
                            <div className={styles.selectionCard}>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>                
                    );
                })}
            </div>
        </div>
    );
}

export default BetSlip;