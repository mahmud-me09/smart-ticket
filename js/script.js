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
        
        if(count == 4){
            document.getElementById('coupon').disabled = false;
            document.getElementById('coupon').addEventListener('keyup',(event) =>{
                if(event.target.value === 'NEW15'){
                    document.getElementById('coupon-submit').disabled = false;
                    document.getElementById('coupon-submit').addEventListener('click',() =>{
                        document.getElementById('grand-total-price').innerText = total*.85;
                        document.getElementById('coupon-section').classList.add('hidden');
                        document.getElementById('discount-row').classList.remove('hidden');
                        document.getElementById('discount').innerText = total*.15
                    })
                }
                else if(event.target.value === 'Couple 20'){
                    document.getElementById('coupon-submit').disabled = false;
                    document.getElementById('coupon-submit').addEventListener('click',() =>{
                        document.getElementById('grand-total-price').innerText = total*.80;
                        document.getElementById('coupon-section').classList.add('hidden');
                        document.getElementById('discount-row').classList.remove('hidden');
                        document.getElementById('discount').innerText = total*.2
                    })
                }
                else{
                    document.getElementById('grand-total-price').innerText = total;
            }
            })
            
        }
        else{
            document.getElementById('grand-total-price').innerText = total;
        }
        console.log(count,total)
    }
})
document.getElementById("next-button").disabled = true
document.getElementById("phone-number").addEventListener('keyup',(e) =>{
    if(count !== 0 && !isNaN(e.target.value)){
        document.getElementById("next-button").disabled = false
    }
})