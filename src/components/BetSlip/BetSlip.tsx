import styles from './BetSlip.module.css';
import Button from '@mui/material/Button';

function BetSlip(props: any) {    
    return (
        <div className={styles.BetSlip}>
            <div className={styles.cardbody}>
                <div className={styles.cardTitle}>{props.markets.name}</div>
            </div>
            <div className={styles.cardfooter}>
                {props.markets.selections.map((item: any) => {
                    return (                        
                            <Button variant="contained">{item.name}</Button>                                                
                    );
                })}
            </div>
        </div>
    );
}

export default BetSlip;