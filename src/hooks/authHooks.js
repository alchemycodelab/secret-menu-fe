import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup, login, verify, signUpRestaurant } from '../actions/authActions';
import { getAuthError, getAuthLoading, getAuthUser } from '../selectors/authSelectors';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);
  const user = useCurrentUser();

  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  useEffect(() => {
    if(user && user.role === 'User') history.push('/');
    if(user && user.role === 'Restaurant') history.push('/restaurant-reg');
  }, [user]);

  const handleChange = ({ target }) => {
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'role') setRole(target.value);
  };

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    role
  };

  const handleSignUp = event => {
    event.preventDefault();
    dispatch(signup(newUser));
  };

  return {
    error,
    loading,
    firstName,
    lastName,
    email,
    password,
    role,
    handleChange,
    handleSignUp
  };
};

export const useRestaurantSignUp = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const history = useHistory();

  const [restaurantName, setRestaurantName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [addressState, setAddressState] = useState('OR');
  const [zipcode, setZipcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [quadrant, setQuadrant] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'restaurantName') setRestaurantName(target.value);
    if(target.name === 'streetAddress') setStreetAddress(target.value);
    if(target.name === 'city') setCity(target.value);
    if(target.name === 'addressState') setAddressState(target.value);
    if(target.name === 'zipcode') setZipcode(target.value);
    if(target.name === 'phoneNumber') setPhoneNumber(target.value);
    if(target.name === 'websiteUrl') setWebsiteUrl(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'quadrant') setQuadrant(target.value);
    if(target.name === 'category') setCategory(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  const restaurant = {
    owner: user._id,
    restaurantName,
    address: {
      streetAddress,
      city,
      state: addressState,
      zipcode
    },
    phoneNumber,
    email,
    description,
    category,
    lat: 1, // need to set real lat
    lng: 2, // need to set real lng
    quadrant,
    websiteUrl,
    imageUrl
  };
  
  const handleRestaurantReg = event => {
    event.preventDefault();
    dispatch(signUpRestaurant(restaurant));
  };

  useEffect(() => {
    if(user.restaurant) history.push('/');
  }, [user]);

  return {
    restaurantName,
    streetAddress,
    city,
    addressState,
    zipcode,
    phoneNumber,
    websiteUrl,
    email,
    imageUrl,
    description,
    quadrant,
    handleChange,
    handleRestaurantReg,
    category
  }
};

export const useLogIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);
  const user = useCurrentUser();

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(user) history.push('/');
  }, [user]);

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleLogIn = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return {
    error,
    loading,
    email,
    password,
    handleChange,
    handleLogIn
  };
};

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  useEffect(() => {
    if(!user) {
      dispatch(verify());
    }
  }, [user]);

  return user;
};
