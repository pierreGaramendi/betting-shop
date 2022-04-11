import styles from './BetSlip.module.css';
import Button from '@mui/material/Button';
import { Interfaces } from '../../interfaces/Interfaces';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskSlice";
import { updateBet } from '../../redux/EventListSlice';

function BetSlip(props: any) {
    
    const dispatch = useDispatch();
    const onSubmit = (event: any, index: number) => {        
        if (props.someIsSelected) {
            return;
        }        
        dispatch(
            addTask({
                task: { ...event, idMarket: props.id }
            })
        );
        dispatch(
            updateBet({ id: event.id, value: true,idMarket: props.id  })
        );        
    };

    return (
        <div className={styles.BetSlip}>
            <div className={styles.cardbody}>
                <div className={styles.cardTitle}>{props.name}</div>
            </div>
            <div className={styles.cardfooter}>
                {props.selections.map((item: any, index: number) => {
                    return (
                        <Button
                            key={item.id}
                            variant={item.selected ? "contained" : "outlined"}
                            color={item.selected ? "success" : "primary"}
                            onClick={() => onSubmit(item, index)}
                        >
                            {item.name}<br></br>
                            {item.price}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default BetSlip;