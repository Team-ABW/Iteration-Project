import React from 'react'
import './styles/profile.css';

const Profile = (props) => {
console.log(props)
console.log(props.props.title)
return(
  <div>
    <div className='card_item'>
        <figure className='cards__item__pic-wrap' data-category={props.props.label}>
          <img id='profile-image'
            className='cards__item__img'
            alt='Travel Image'
            src={props.props.images}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.props.title}</h5>
          <h5>Criminal ID: {props.props.criminal_id}</h5>
          <h5>Sex: {props.props.sex}</h5>
          <h5>Reward: {props.props.reward_text}</h5>
          <h5>Hair: {props.props.hair_raw}</h5>
          <h5>Publication: {props.props.publication}</h5>
          <h5>FBI Field Office: {props.props.field_offices}</h5>
          <h5>Details: {props.props.details}</h5>
          <h5>URL: {props.props.url}</h5>
        </div>
    </div>
  </div>
)
};
export default Profile;