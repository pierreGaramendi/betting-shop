import { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './EventList.css';
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
        <div className="EventList">
            {list.map((item: Interfaces.Event) => {
                return (
                    <Event name={item.name} markets={item.markets} id={item.id}/>
                );
            })}
        </div>
    );
}

export default EventList;
