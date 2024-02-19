// click next button to show success icon
document.getElementById('next-button').addEventListener('click', () =>{
    document.getElementById('main').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden')
})
// scroll to buy section
document.getElementById('buy-tickets').addEventListener('click',() =>{
    document.getElementById('buy-section').scrollIntoView()
})
// click to the success button to go back
document.getElementById('rollback').addEventListener('click', () =>{
    document.getElementById('success').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden')
})

// create a tr with 3 td
function createTableContent(seat) {
    const tr = document.createElement('tr');
    const seatCell = document.createElement('td');
    seatCell.textContent = seat;
    const classCell = document.createElement('td');
    classCell.textContent = "Economy";
    const priceCell = document.createElement('td');
    priceCell.textContent = 550;
  
    tr.appendChild(seatCell);
    tr.appendChild(classCell);
    tr.appendChild(priceCell);
  
    const seatSelect = document.getElementById('seat-select');
    seatSelect.appendChild(tr);
}

let count = 0;
let total = 0;
document.getElementById('seatParent').addEventListener('click', (event)=>{
    if(! document.getElementById(event.target.id).disabled == true && event.target.matches('button') && count<4){
        createTableContent(event.target.id)
        document.getElementById(event.target.id).disabled = true;
        
        total += 550;
        count +=1;
        document.getElementById('total-price').innerText= total;
        document.getElementById('seat-number').innerText= count;
        document.getElementById('remaining-seat').innerText -= 1;
        console.log(count,total)
    }
})

// seat Count


// ticket selection

// function selectTickets(id){
//     let clickedSeat;
//     document.getElementById(id).addEventListener('click',(event) =>{
//         clickedSeat = event.target.innerText
//         createTableContent(clickedSeat)
//         console.log(clickedSeat)
//     })

// }
// selectTickets('A1')