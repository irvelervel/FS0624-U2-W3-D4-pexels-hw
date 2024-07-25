const searchImages = function (wordToSearch) {
  fetch(`https://api.pexels.com/v1/search?query=${wordToSearch}`, {
    headers: {
      Authorization: 'BQ5J0xUI1cRSwGLF30de3ndtupKdYr4UstZ8wCjn2p9yW9oGoKuzTgnz',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('fetch went wrong')
      }
    })
    .then((pexelsData) => {
      console.log('pexelsData', pexelsData)
      // seleziono TUTTI i cani di tutte le card
      //   1) seleziono gli elementi con classe "card-img-top"
      //   const allTheDogImages = document.getElementsByClassName('card-img-top')
      //   const allTheDogImages = document.querySelectorAll('.card-img-top')
      // 2) dalla card, trovo la img in essa contenuta
      const allTheDogImages = document.querySelectorAll('.card img')
      console.log('CANI?', allTheDogImages)

      //   allTheDogImages.forEach((dog, i) => {
      //     console.log(dog)
      //     // cosa faccio per OGNI cane? cambio la sorgente immagine
      //     dog.src = pexelsData.photos[i].src.medium
      //     // swappa la sorgente del cane con una delle foto di pexels
      //   })

      for (let i = 0; i < allTheDogImages.length; i++) {
        // per OGNI immagine di un cane vado a sostituire la sua "src"
        // con quella di UNA delle foto di pexels
        allTheDogImages[i].src = pexelsData.photos[i].src.medium
      }
    })
    .catch((err) => {
      console.log('error', err)
    })
}

// searchImages()
// document.getElementsByClassName('btn-primary')[0]

// trova il PRIMO (e unico) bottone dotato di classe "btn-primary"
document.querySelector('.btn-primary').addEventListener('click', () => {
  searchImages('kittens')
})

document.querySelector('.btn-secondary').addEventListener('click', () => {
  searchImages('hamsters')
})

document.querySelector('.btn-info').addEventListener('click', () => {
  const currentSearchValue = document.getElementById('search').value
  searchImages(currentSearchValue)
})

// es. 3
const replaceAllEdits = function () {
  // trovare tutti i bottoni edit
  const allTheEdits = document.querySelectorAll(
    '.card .btn-group button:last-of-type'
  )
  console.log(allTheEdits)
  allTheEdits.forEach((edit) => {
    edit.innerText = 'Hide'
    // 4)
    edit.addEventListener('click', function (e) {
      console.log('hide')
      // funzionerebbe anche con "this" invece di e.target, è sempre il bottone!
      e.target.closest('.card').classList.add('invisible')
    })
  })
}

replaceAllEdits()
