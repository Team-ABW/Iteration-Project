import React, { useState, useEffect } from 'react';
import '../../App.css';
import { getConvictsFromDb, deleteConvictFromDb } from '../../async';
import ListCardItem from '../ListCardItem';

export default function List() {
  const [myConvicts, setMyConvicts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getConvictsFromDb().then((data) => {
      console.log(data);
      setMyConvicts(data);
      setLoad(false);
    });
  }, []);

  function deleteHandleClick(props) {
    deleteConvictFromDb(props).then((res) => {
      console.log(props);
      console.log('convict was deleted');
      console.log(res);
      setMyConvicts(res);
    });

  }

  function renderMyConvicts() {
    return myConvicts.map((convict) => {
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
          path={`/profile/${convict.title}`}
          deleteHandleClick={deleteHandleClick}
        />
      );
    });
  }

  return (
    <div className='cards'>
      <h1>My People of Interest</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>{!load && renderMyConvicts()}</div>
      </div>
    </div>
    // <section className='my-convicts'>{!load && renderMyConvicts()}</section>
  );
}
