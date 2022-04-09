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
                            <Button variant="contained">{item.name}</Button>                                                
                    );
                })}
            </div>
        </div>
    );
}

export default BetSlip;