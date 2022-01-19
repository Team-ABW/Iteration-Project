import React from 'react'
import './styles/profile.css';

const Profile = (props) => {
console.log(props)
return(
  <div>
    <div className='card_item'>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Travel Image'
            src={props.images}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.title}</h5>
          <h5>Criminal ID: {props.criminal_id}</h5>
          <h5>Sex: {props.sex}</h5>
          <h5>Reward: {props.reward_text}</h5>
          <h5>Hair: {props.hair_raw}</h5>
          <h5>Publication: {props.publication}</h5>
          <h5>FBI Field Office: {props.field_offices}</h5>
          <h5>Details: {props.details}</h5>
          <h5>URL: {props.url}</h5>
        </div>
    </div>
  </div>
)
};
export default Profile;