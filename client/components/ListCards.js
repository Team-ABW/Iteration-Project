import React, { useState, useEffect } from 'react';
import './styles/Cards.css';
import '../../App.css';
import CardItem from './CardItem';
import { getConvictsFromDb } from '../../async';
import ListCardItem from './ListCardItem';
import {
    deleteConvictFromDb
} from '../async';

function ListCards() {
    const [convicts, setConvicts] = useState([]);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        getConvictsFromDb().then((data) => {
            setConvicts(data);
            setLoad(false);
        });
    }, []);

    function deleteHandleClick(props) {

        deleteConvictFromDb(props.criminal_id).then((res) => {
            console.log('convict was deleted');
        });

    }

    function renderMyConvicts() {
        return convicts.map((convict) => {
            return (
                <ListCardItem
                    key={convict._uid}
                    title={convict.title}
                    images={convict.images}
                    details={convict.details}
                    reward_text={convict.reward_text}
                    sex={convict.sex}
                    hair_raw={convict.hair_raw}
                    publication={convict.publication}
                    url={convict.url}
                    field_offices={convict.field_offices}
                    criminal_id={convict.uid}
                    deleteHandleClick={deleteHandleClick}
                    path={`/profile/${convict.criminal_id}`}
                />
            );
        });
    }


    return (
        <div className='cards'>
            <h1>Your Convicts</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>{!load && renderMyConvicts()}</div>
            </div>
        </div>
    );
}

export default ListCards;
