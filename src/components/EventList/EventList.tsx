import { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './EventList.css';
import { getEvents } from '../../services/Service';

function EventList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getEvents().then((resp) => {
            const { data } = resp;
            setList(data);            
        })
    }, [])

    return (
        <div className="EventList">
            {list.map((item:any) => {
                return (
                    <Event  name={item.name} markets={item.markets}/>
                );
            })}
        </div>
    );
}

export default EventList;
