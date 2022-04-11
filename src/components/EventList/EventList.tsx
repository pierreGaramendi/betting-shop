import { useEffect } from 'react';
import Event from '../Event/Event';
import styles from './EventList.module.css';

import { getEvents } from '../../services/Service';
import { dropEmpty } from './EventList.utils';
import { loadEvents } from '../../redux/EventListSlice';
import { useDispatch } from "react-redux";

import { Interfaces } from '../../interfaces/Interfaces'
import { useSelector } from "react-redux";

function EventList() {

    const dispatch = useDispatch();

    const events = useSelector((state: any) => {
        return state.events;
    });

    useEffect(() => {
        getEvents().then((resp) => {
            const { data } = resp;
            const dataCleaned = dropEmpty(data);
            dispatch(
                loadEvents(dataCleaned)
            )
        })
    }, [])

    return (
        <div className={styles.EventList}>
            {events.map((item: Interfaces.Event) => {
                return (
                    <Event key={item.id} name={item.name} markets={item.markets} id={item.id} />
                );
            })}
        </div>
    );
}

export default EventList;
