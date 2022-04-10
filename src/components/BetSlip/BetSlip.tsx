import React, { useState } from 'react';
import styles from './BetSlip.module.css';
import Button from '@mui/material/Button';
import { Interfaces } from '../../interfaces/Interfaces';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskSlice";

function BetSlip(props: Interfaces.Market) {

    const dispatch = useDispatch();
    const onSubmit = (event: Interfaces.Selection) => {        
        dispatch(
            addTask({
                task: { ...event }
            })
        );
    };

    return (
        <div className={styles.BetSlip}>
            <div className={styles.cardbody}>
                <div className={styles.cardTitle}>{props.name}</div>
            </div>
            <div className={styles.cardfooter}>
                {props.selections.map((item: Interfaces.Selection) => {
                    return (
                        <Button
                            key={item.id}
                            variant="contained"
                            color="success"
                            onClick={() => onSubmit(item)}
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