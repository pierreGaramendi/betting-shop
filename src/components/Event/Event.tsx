import styles from './Event.module.css';
import BetSlip from '../BetSlip/BetSlip';
import { Interfaces } from '../../interfaces/Interfaces';

function Event(props: Interfaces.Event) {    
    return (
        <div className={styles.Event}>
            <div className={styles.card}>
                <div className={styles.cardheader}>
                    <div>{props.name}</div>
                </div>
                {props.markets.map((item: Interfaces.Market) => {                    
                    return (
                        <BetSlip id={item.id} name={item.name} selections={item.selections}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Event;
