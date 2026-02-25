const hotelsData = [
    {
        rating:9.6,
        img:"/lovedhotelimages/point3d-commercial-imaging-ltd-5BV56SdvLmo-unsplash.jpg",
        hotelName:" Soho Hotel London",
        cityName:"London",
        oneNightPrice:"$130"
    }
    ,
    {
        rating:9.2,
        img:"/lovedhotelimages/3d-rendering-modern-luxury-bedroom-suite-bathroom.jpg",
        hotelName:"Hotel Norrebro",
        cityName:"Copenhagert",
        oneNightPrice:"$110"
    }
    ,
    {
        rating:7.6,
        img:"/lovedhotelimages/luxury-bedroom-hotel.jpg",
        hotelName:"Sunset Plaza Hotel",
        cityName:"Barcelona",
        oneNightPrice:"$80"
    }
    ,
    {
        rating:9.9,
        img:"/lovedhotelimages/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg",
        hotelName:"Three Quaters Hotel",
        cityName:"Stockholm",
        oneNightPrice:"$180"
    }
    ,
    {
        rating:9.1,
        img:"/lovedhotelimages/reisetopia-aI6Su7Mu9Ro-unsplash.jpg",
        hotelName:`surf n Turf Suites`,
        cityName:"Lisbon",
        oneNightPrice:"$160"
    }
]
const hotelsLovedContainer = document.querySelector(".hotel-loved-cards")
let htmlForLovedHotels = ""
hotelsData.forEach(e => {
     htmlForLovedHotels += `
    <div class="loved-hotel-box hotel-loved-card-1">
          <div class="upper-loved-hotel-section">
            <div class="rating-section">
  <div class="rating">
  ${e.rating}
  </div>
  <div class="like">

  </div>
</div>
<img src="${e.img}" alt="">

          </div>
          
          <h3>${e.hotelName}</h3>
          <p>${e.cityName}</p>
          <h2 class="one-night-cost">from ${e.oneNightPrice}/night
          <span class="material-symbols-outlined">
chevron_right
</span>
          </h2>

        </div>
    `
    
    
})

hotelsLovedContainer.innerHTML = htmlForLovedHotels;