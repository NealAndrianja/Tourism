const accessKey = "jFot52TpoXxlqYsTvNYpKpJTu1RYr81as1i1Wh_o5zI"
  const accessKey2 = "8311a71ca22dfa7f690d8ea811e16a61"
  const topSection = document.getElementById("top-dest-disc")
  const gallery = document.getElementsByClassName("gallery")
  const formSearch = document.getElementById("search-dest")
  const test = document.getElementById("hero-dest")

  let collection = ""

//  display result
  async function showMain(entry){
    test.style.display = "block"
    topSection.style.display = "none"

    if (test.childNodes.length > 0) {
      while (test.firstChild) {
        test.removeChild(test.firstChild);
      }
    }

    collection = entry
    const url =`https://api.unsplash.com/photos/random?query=${collection}&orientation=${"landscape"}&client_id=${accessKey}`

    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Check if data.urls is available and not empty
      if (data.urls && data.urls.regular) {
        test.style.backgroundImage = `url(${data.urls.raw})`
        test.style.display = "flex"
        const h1 = document.createElement('h1');
        h1.innerText = collection
        test.appendChild(h1);
      } else {
        console.error('Invalid response from Unsplash API');
      }
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
    // get details
    const aboutSEction = document.getElementsByClassName("country-about")
    const details = document.getElementsByClassName("list")
    aboutSEction[0].style.display = "flex"
    const url2 = `http://api.countrylayer.com/v2/name/${collection}?access_key=${accessKey2}& fullText=true `
    
    try {
      const response2 = await fetch(url2);
      const data2 = await response2.json();
      
      console.log(data2)
      

      const capital = document.createElement("p")
      capital.innerText = data2[0].capital
      details[0].replaceChild(capital, details[0].lastChild)
      const region = document.createElement("p")
      region.innerText = data2[0].region
      details[1].replaceChild(region, details[1].lastChild)
      const phoneCode = document.createElement("p")
      phoneCode.innerText = data2[0].callingCodes[0]
      details[2].replaceChild(phoneCode, details[2].lastChild)

    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // script for gallery
    const row = document.getElementsByClassName("row")
    if (row[0].childNodes.length > 0) {
      while (row[0].firstChild) {
        row[0].removeChild(row[0].firstChild);
      }
    }
    for(let i = 0; i<4; i++){
      const col = document.createElement("div")
      col.classList.add("column")
      row[0].appendChild(col)
    }
    gallery[0].style.display = "block"
    const urlForGallery = `https://api.unsplash.com/search/photos?page=${1}&per_page=${30}&query=${collection}&client_id=${accessKey}`
    const column = document.getElementsByClassName("column")
    let modal = document.getElementsByClassName("modal")
    let modalImg = document.getElementsByClassName("modal-content")
    let caption = document.getElementsByClassName("caption")
    let span = document.getElementsByClassName("close")[0]
    try {
      const response3 = await fetch(urlForGallery)
      const data3 = await response3.json()

      
      
      let result = data3.results.map((data) => {
        console.log(data)
        const img = document.createElement("img")
        img.src = data.urls.small
        img.alt = data.alt_description
        img.addEventListener("click", () => {
          modal[0].style.display = "block"
          modalImg[0].src = data.urls.regular
          caption[0].innerHTML = `${data.alt_description} "${data.alt_description}"`
        })
        span.addEventListener("click", ()=>{
          modal[0].style.display = "none"
        })
        return img
      })

      console.log(result)

      for(let i = 0; i<5; i++){
        for(let j = 0; j<20; j+=5){
          column[i].appendChild(result[j+i])
        }
      }

      // const destSwiper =document.getElementById("dest-Swiper")
      // for(let i = 21; i<30; i++){
      //   const dstSlide = document.createElement("div")
      //   dstSlide.classList.add("destination")
      //   dstSlide.appendChild(result[i])
      //   const destTitle = document.createElement("h5")
      //   destTitle.textContent = result[i].alt
      //   dstSlide.appendChild(destTitle)
      //   const destDesc = document.createElement("span")
      //   destTitle.textContent = result[i].alt_description
      //   dstSlide.appendChild(destDesc)
      //   destSwiper.appendChild(dstSlide)
      // }
    } catch (error) {
      
    }
   }
  
   document.addEventListener("DOMContentLoaded", () => {
    // formSearch.addEventListener("submit", (event) => {
    //   event.preventDefault()
      const urlParams = new URLSearchParams(window.location.search)
      const source = urlParams.get("source")

      // const inputDisc = formSearch.elements.data
      // console.log(inputDisc.value)
      const inputDisc = urlParams.get("data")
      if(source && inputDisc){
        showMain(inputDisc)
      }else if(!source && inputDisc){
        showMain(inputDisc)
      }
      
      
    // })
   })

  

  //script for destination swiper
  let swiper3 = new Swiper(".mySwiperDestinations", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



