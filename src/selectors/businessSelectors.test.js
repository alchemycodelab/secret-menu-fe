import { selectRestaurant, selectPolls, selectOfferings, selectOrders, selectOrderFromOffering } from './businessSelectors';

describe('business selectors tests', () => {
  it('selects the users restaurant', () => {
    const state = { 
      auth: {
        user: { 
          restaurant: [{
            address: { 
              streetAddress: 'ab',
              city: 'ab',
              state: 'OR',
              zipcode: 11111
            },
            _id: '5ecc5dd2031fef2cdce45cee',
            owner: '5ecc5dbd031fef2cdce45ced',
            restaurantName: 'ab',
            email: 'ab@ab',
            phoneNumber: '111-111-1112',
            description: 'ab',
            category: 'Indian',
            lat: 35.0743187,
            lng: -90.0861023,
            quadrant: 'S',
            websiteUrl: '1',
            imageUrl: 'ab',
            offerings: [],
            polls: [],
            orders: []
      }]
    }
  }
};
    const userRestaurant = selectRestaurant(state);

    expect(userRestaurant).toEqual({
      _id: '5ecc5dd2031fef2cdce45cee',  
      address: { 
          streetAddress: 'ab',
          city: 'ab',
          state: 'OR',
          zipcode: 11111
        },
        _id: '5ecc5dd2031fef2cdce45cee',
        owner: '5ecc5dbd031fef2cdce45ced',
        restaurantName: 'ab',
        email: 'ab@ab',
        phoneNumber: '111-111-1112',
        description: 'ab',
        category: 'Indian',
        lat: 35.0743187,
        lng: -90.0861023,
        quadrant: 'S',
        websiteUrl: '1',
        imageUrl: 'ab',
        offerings: [],
        polls: [],
        orders: []
      }
    );
  });


  it('selects the users restaurants polls', () => {
    const state = {
        business: {
          offerings: [],
          polls: [],
          orders: []
        }
    };
    const userPolls = selectPolls(state);
    expect(userPolls).toEqual([])
  });

  it('selects the users restaurants offerings', () => {
    const state = {
      business: {
        offerings: [],
        polls: [],
        orders: []
      }
  };
    const userOfferings = selectOfferings(state);
    expect(userOfferings).toEqual([])
  })
  it('selects the users restaurants orders', () => {
    const state = {
      business: {
        offerings: [],
        polls: [],
        orders: []
      }
  };
    const userOrders = selectOrders(state);
    expect(userOrders).toEqual([])
  })

  it('selects the users restaurants orders', () => {
    const state = { 
      business: {
        orders: [{
          _id: 1
        }]
      }
}
const userOrdersFromOff = selectOrderFromOffering(state, 1);
    expect(userOrdersFromOff).toEqual({
      _id: 1
    })

})
});
