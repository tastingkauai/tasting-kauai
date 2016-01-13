TastingKauai.Collections.Restaurants = new Meteor.Collection('restaurants');

TastingKauai.Collections.Restaurants.allow({
    insert: function( userId, doc){
        return userId ? true : false;
    },
    update: function( userId, doc){
        return userId ? true : false;
    },
    remove: function( userId, doc){
        return userId ? true : false;
    }
});

TastingKauai.fixtures = [
    {
        name: 'Art Cafe Hemingway',
        byline: 'Light European',
        googlePlaceID: 'ChIJabHFQ_LgBnwROHHyufv_3m4',
        phone: '(808) 822-2250',
        hours: [],
        streetAddress: '',
        city: 'Kapaa',
        state: 'Hawaii',
        zip: '96746',
        description: 'Description',
        images: [],
        coverPhoto: '/img/art-cafe-hemingway/cover.jpg',
        lat: '',
        lng: '',
        website: 'http://art-cafe-hemingway.com',
        icons: {
            foodService: {
                breakfast: true,
                lunch: true,
                dinner: true
            },
            priceRange: 2,
            slippahCode: 2,
            reservations: false,
            alternativeDiets: {
                vegetarian: true,
                vegan: false,
                glutenFree: false
            },
            wifi: true,
            foodTruck: false,
            farmersMarket: false,
            favorites: false,
            haleAinaAwards: false,
            hawaiiRegionalCuisine: false
        }
    },
    {
        name: 'BarAcuda',
        byline: 'Mediterranean Style Tapas',
        googlePlaceID: 'ChIJqf33n03lBnwR4HHQZCUiGHg',
        phone: '808-826-7081',
        hours: [],
        streetAddress: '',
        city: 'Hanalei',
        state: 'Hawaii',
        zip: '96714',
        description: 'Description',
        images: [],
        coverPhoto: '/img/bar-acuda/cover.jpg',
        lat: '',
        lng: '',
        website: 'http://www.restaurantbaracuda.com',
        icons: {
            foodService: {
                breakfast: false,
                lunch: false,
                dinner: true
            },
            priceRange: 2,
            slippahCode: 2,
            reservations: true,
            alternativeDiets: {
                vegetarian: true,
                vegan: true,
                glutenFree: true
            },
            wifi: false,
            foodTruck: false,
            farmersMarket: false,
            favorites: true,
            haleAinaAwards: false,
            hawaiiRegionalCuisine: false
        }
    },
    {
        name: 'The Dolphin',
        byline: 'Fresh Fish and Sushi',
        googlePlaceID: 'ChIJz2loBlLlBnwRcW6-n2G0IA4',
        phone: '808-826-6113',
        hours: [],
        streetAddress: '',
        city: 'Hanalei',
        state: 'Hawaii',
        zip: '96714',
        description: 'Description',
        images: [],
        coverPhoto: '/img/dolphin/cover.jpg',
        lat: '',
        lng: '',
        website: 'http://www.hanaleidolphin.com',
        icons: {
            foodService: {
                breakfast: false,
                lunch: true,
                dinner: true
            },
            priceRange: 3,
            slippahCode: 2,
            reservations: false,
            alternativeDiets: {
                vegetarian: true,
                vegan: true,
                glutenFree: true
            },
            wifi: false,
            foodTruck: false,
            farmersMarket: false,
            favorites: false,
            haleAinaAwards: false,
            hawaiiRegionalCuisine: false
        }
    }
]