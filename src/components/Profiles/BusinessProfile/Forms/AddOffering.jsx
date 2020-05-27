import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBusinessOffering } from '../../../../actions/businessActions';
import { useCurrentUser } from '../../../../hooks/authHooks';

export default function AddOffering() {
  const dispatch = useDispatch();
  const user = useCurrentUser();

  const [dishName, setDishName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [numRemaining, setNumRemaining] = useState(0);
  const [pickUpDate, setPickUpDate] = useState(0);
  const [dietaryRestriction, setDietaryRestriction] = useState([]);
  const [price, setPrice] = useState(0);


  const handleChange = ({ target }) => {
    if(target.name === 'dishName') setDishName(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'numRemaining') setNumRemaining(target.value);
    if(target.name === 'pickUpDate') setPickUpDate(target.value);
    if(target.name === 'dietaryRestriction') setDietaryRestriction(target.value);
    if(target.name === 'price') setPrice(target.value);
  };

  const offering = {
    dishName,
    imageUrl,
    description,
    numRemaining,
    pickUpDate,
    dietaryRestriction,
    price,
    restaurant: user.restaurant[0]._id
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addBusinessOffering(offering));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={dishName} name="dishName" onChange={handleChange} placeholder="Dish Name" />
        <input type="text" value={imageUrl} name="imageUrl" onChange={handleChange} placeholder="Image url" />
        <input type="text" value={description} name="description" onChange={handleChange} placeholder="Description" />
        <input type="number" value={numRemaining} name="numRemaining" onChange={handleChange} placeholder="Number of dishes" />
        <input type="datetime-local" value={pickUpDate} name="pickUpDate" onChange={handleChange} placeholder="Pick Up Date" />
        <label>Dietary Restrictions</label>
        <select value={dietaryRestriction} name="dietaryRestriction" onChange={handleChange}>
          <option value = "None" selected>None</option>
          <option value = "Vegetarian">Vegetarian</option>
          <option value = "Vegan">Vegan</option>
          <option value = "Gluten Free">Gluten Free</option>
          <option value = "Dairy Free">Dairy Free</option>
      </select>
        <button>Add</button>
      </form>
    </div>
  );
}