import React, { useState, useEffect } from 'react';
import styles from './BetSlip.module.css';
import Button from '@mui/material/Button';
import { Interfaces } from '../../interfaces/Interfaces';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TaskSlice";

function BetSlip(props: Interfaces.Market) {
    
    const [selections, setSelections] = useState(props.selections);
    const [someSelected, setsomeSelected] = useState(false);

    useEffect(() => {
        const newSelections = props.selections.map((item: any) => {
            return { ...item, selected: false }
        });
        setSelections(newSelections);
    }, [])

    const updateListSelection = (index: number) => {
        const item = selections[index];
        const newItem = { ...item, selected: true };
        selections[index] = newItem;
        setSelections(selections);
    }

    const dispatch = useDispatch();
    const onSubmit = (event: any, index: number) => {
        if (someSelected) {
            return;
        }
        updateListSelection(index);
        dispatch(
            addTask({
                task: { ...event }
            })
        );
        setsomeSelected(true);
    };

    return (
        <div className={styles.BetSlip}>
            <div className={styles.cardbody}>
                <div className={styles.cardTitle}>{props.name}</div>
            </div>
            <div className={styles.cardfooter}>
                {selections.map((item: any, index: number) => {
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