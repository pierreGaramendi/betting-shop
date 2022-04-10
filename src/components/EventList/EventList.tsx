import { useEffect, useState } from 'react';
import Event from '../Event/Event';
import styles from './EventList.module.css';
import { getEvents } from '../../services/Service';
import { Interfaces } from '../../interfaces/Interfaces'

function EventList() {
    const [list, setList] = useState<Interfaces.Event[]>([]);

    useEffect(() => {
        getEvents().then((resp) => {            
            const { data } = resp;
            setList(data);
        })
    }, [])

    return (
        <div className={styles.EventList}>
            {list.map((item: Interfaces.Event) => {
                return (
                    <Event key={item.id} name={item.name} markets={item.markets} id={item.id}/>
                );
            })}
        </div>
    );
}

export default EventList;
