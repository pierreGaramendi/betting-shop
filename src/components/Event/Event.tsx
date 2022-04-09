import styles from './Event.module.css';
import BetSlip from '../BetSlip/BetSlip';

function Event(props: any) {
    return (
        <div className={styles.Event}>
            <div className={styles.card}>
                <div className={styles.cardheader}>
                    <div>{props.name}</div>
                </div>
                {props.markets.map((item: any) => {
                    return (
                        <BetSlip markets={item}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Event;
