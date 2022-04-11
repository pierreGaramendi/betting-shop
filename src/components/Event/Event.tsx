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
                {props.markets.map((item: any) => {
                    return (
                        <BetSlip
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            selections={item.selections}
                            someIsSelected={item.someIsSelected}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Event;
