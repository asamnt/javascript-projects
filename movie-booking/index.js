


const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
// console.log(`seats = > ${seats}`)
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')


populateUI()


let ticketPrice = +movieSelect.value;

//save selected selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// console.log(ticketPrice)
//update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected ')
    console.log(`selectedSeats = > ${selectedSeats}`)
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
    console.log(seatsIndex)

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))


    console.log(selectedSeats)
    const selectedSeatsCount = selectedSeats.length
    console.log(selectedSeatsCount)
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

//copy selected seats into arr
//map through arr
//return a new array of iondexes


//get date from localStorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    console.log(selectedSeats)

    if(selectedSeats != null && selectedSeats.length > 0){ // check if data is present in localstorage
        seats.forEach((seat, index) => { //loop for all the available unoccupied seats
            if(selectedSeats.indexOf(index) > -1){ //check if the index of the unoccupied seat is present in the array of selected seats from storage
                seat.classList.add('selected') // update the class of the seat by the 'selected' class
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex != null){
        movieSelect.selectedIndex = selectedMovieIndex
    }

}

//Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})


//Seat click event
container.addEventListener('click', (e) => {
    // console.log(e.target)
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target)
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

updateSelectedCount()




