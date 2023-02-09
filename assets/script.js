
// Proof of Concept 

// key
const api_key ='8143e65c-7c54-4b44-9179-9454f8ba3d2e'

// Search Parameter for flight
let flight_iata ='AA6'

// Flight API Fetch URL
let Flight_Api_URL = `https://airlabs.co/api/v9/flight?flight_iata=${flight_iata}&api_key=${api_key}`



let flightbtn = document.querySelector(".flightbtn")

let cardcontainer = document.querySelector(".carddiv")


 // Movie Poster image
let Poster1 = document.querySelector(".movieTestimg1")
let Poster2 = document.querySelector(".movieTestimg2")
let Poster3= document.querySelector(".movieTestimg3")



// Flight API Search 
function FlightDataSearch(){
fetch("sampledata.txt")

.then(response =>response.json())
.then(flightData => {
    console.log(flightData)


    //Parse Flight Info Data

let FlightNumber = flightData.request.params.flight_iata
let departTime = flightData.response.deptime
let arrivalTime = flightData.response.arr_time
let flightTime = flightData.response.duration


console.log(flightTime)

let card = document.querySelector('.card-body')

// togle card info 
cardcontainer.classList.toggle("d-none")


console.log(cardcontainer.classList)

card.innerHTML = `
<p>Flight Number: ${FlightNumber}</p>
<p> Flight Depart Time: ${departTime}</p>
<p>Flight Arrival Time: ${arrivalTime}</p>
<p>Flight Length: ${flightTime} mins </p>
`

})

}



 flightbtn.addEventListener("click", FlightDataSearch)







// FETCH MOVIE TRENDING 
 fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c1d91b870e49691263e4f7d72633542c")

 .then(response =>response.json())
 .then(moviedataRandom => {
        console.log(moviedataRandom)

        // Parse Poster Path
         let src1 = moviedataRandom.results[10].poster_path
         let src2 = moviedataRandom.results[5].poster_path
         let src3 = moviedataRandom.results[6].poster_path
        
         //Sets Poster src
         Poster1.src = `https://image.tmdb.org/t/p/original${src1}`
         Poster2.src = `https://image.tmdb.org/t/p/original${src2}`
         Poster3.src = `https://image.tmdb.org/t/p/original${src3}`
 
            console.log (src1)


            let movieID =  moviedataRandom.results[3].id
     

        //fETCh MOVIE GET MOVIE END POINT VIA ID 
       return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c1d91b870e49691263e4f7d72633542c&language=en-US`)
         
 })

        .then(response =>response.json())
        .then(movieByID => {
        console.log(movieByID)
        console.log(movieByID.runtime)
        console.log(movieByID.poster_path)
       // let path  = movieByID.poster_path
        //Poster1.src = `https://image.tmdb.org/t/p/original/${path}`
        

        //console.log(Poster1.src)

     })
     {}

 
    