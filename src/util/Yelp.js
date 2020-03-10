const apiKey = "Bskvv29yMOhvo0n4dQq2kAd2VZg7begeTNHEh6DGUaywBRjumyZcgyd8_edn6jG5k1Pmz6c-4ztLEJTt3UOGxmBTNOG9ssKnvtORSvj2JHXYuOdrKn41rCmd7gxkXnYx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: 
            {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        latitude: business.coordinates.latitude,
                        longitude: business.coordinates.longitude,
                        url: business.url
                    };
                });
            }
        });
    }    
}

export default Yelp;