(function () {
    const pictures = [
        "1",
        "2",
        "3"
    ];
    let counter = 0;
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector("#home-section");
    const imgDiv1 = document.querySelector(".navbar");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')) {
                counter--;

                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgDiv.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
                imgDiv1.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
            }
            if (button.classList.contains('btn-right')) {
                counter++;

                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDiv.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
                imgDiv1.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
            }
        })
    });
    function changeBackground() {
        imgDiv.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
        imgDiv1.style.background = `url('./img/${pictures[counter]}.jpg') center/cover fixed no-repeat`;
        counter = (counter + 1) % pictures.length;
    }
    
    setInterval(changeBackground, 3000);

})();

// const search = () => {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const product = document.querySelectorAll(".product");

//     for (var i = 0; i < product.length; i++) {
//       let match = product[i].querySelector("h3");

//       if (match) {
//         let textValue = match.textContent || match.innerText;

//         if (textValue.toUpperCase().indexOf(searchbox) > -1) {
//           product[i].style.display = "block";
//         } else {
//           product[i].style.display = "none";
//         }
     
//       }
//     }
//   };



// time section...
  const getTicketButtons = document.querySelectorAll(".get-ticket-button");
  const timingOptions = document.querySelectorAll(".timing-options");
  const timingSelects = document.querySelectorAll(".timing-select");
  const bookTicketButtons = document.querySelectorAll(".book-ticket-button");

  getTicketButtons.forEach((getTicketButton, index) => {
    getTicketButton.addEventListener("click", () => {
      timingOptions[index].style.display = "block";
    });
  });

  bookTicketButtons.forEach((bookTicketButton, index) => {
    bookTicketButton.addEventListener("click", () => {
      const selectedTiming = timingSelects[index].value;
      if (selectedTiming) {
        alert(`You have selected the timing: ${selectedTiming}`);
      } else {
        alert("Please select a timing.");
      }
    });
  });


// email Selection.....

document.addEventListener("DOMContentLoaded",function(){
  const emailInput= document.getElementById("emailInput")
  const subcribeButton= document.getElementById("subscribeButton")

  subcribeButton.addEventListener('click',function(){
    const enteredEmail=emailInput.value;
    if(enteredEmail!==""){
      alert("Thank you for contact...!");
    }
  })
})




    // document.addEventListener('DOMContentLoaded', () => {
    //     const buttons = document.querySelectorAll('.dropdown-item');
    //     const movieItems = document.querySelectorAll('.divbox');

    //     buttons.forEach((button) => {
    //         button.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const filter = e.target.dataset.filter;

    //             movieItems.forEach((item) => {
    //                 if (filter === 'all') {
    //                     item.style.display = 'block';
    //                 } else {
    //                     if (item.classList.contains(filter)) {
    //                         item.style.display = 'block';
    //                     } else {
    //                         item.style.display = 'none';
    //                     }
    //                 }
    //             });
    //         });
    //     });
    // });
    








