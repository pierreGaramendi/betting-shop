import styles from './Event.module.css';
import Button from '@mui/material/Button';

function Event() {
    return (
        <div className={styles.Event}>
            <div className={styles.card}>
                <div className={styles.cardheader}>
                    <div>Arsenal vs Chelsea</div>
                </div>
                <div className={styles.cardbody}>
                    <div>To WIN</div>
                </div>
                <div className={styles.cardfooter}>
                    <Button variant="contained">Arsenal</Button>
                    <Button variant="contained">Chelsea</Button>                    
                </div>
            </div>
        </div>
    );
}

export default Event;
