const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    }
  ];


pets.forEach ((item,i) =>
 {item.id = i +1});


// Utility Function //
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};
pets.forEach ((item,i) =>
 {item.id = i +1});


// const addId = () => {
//   pets.forEach((item, index) => {
//     // if (item.id === undefined)
//     item.id = (index + 1).toString();
//   });
// };
// const newId = () => {};



// *********  HTML COMPONENT FUNCTIONS  ********* //
// Add Pet Button / Modal
const addPetModal = () => {
  const domString = `
    
    <!-- Modal -->
    <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Submit Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
          <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Name" id="name" aria-label="Pet Name" required>
            <label for="videoId">Pet Name</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
            <label for="color">Color</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="skill" id="specialSkill" aria-label="skill" required>
            <label for="skill">Special Skill</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="">Select a Type</option>
              <option value="cat">cat</option>
              <option value="dog">dog</option>
              <option value="dino">dino</option>
          
            </select>
            <label for="type">Type</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="image" id="imageUrl" aria-label="image" required>
            <label for="image">Image</label>
          </div>
      
          <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  `;
  renderToDom('#createBtnContainer', domString);
};

// Pet Button Row
const filterButtons = () => {
  const domString = `
  <div class="navigation-btn">
    <button class="btn btn-secondary btn-lg buttonRow cat-btn-color" id="cats">Cats</button>
    <button class="btn btn-secondary btn-lg buttonRow dog-btn-color" id="dogs">Dogs</button>
    <button class="btn btn-secondary btn-lg buttonRow dino-btn-color" id="dinos">Dinos</button>
    <button class="btn btn-secondary btn-lg buttonRow clear-btn" id="all">All</button>
    <button id="add-animal" type="button" class="btn btn-secondary add-all-btn" data-bs-toggle="modal" data-bs-target="#add-pet">
      Add New
    </button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
};

// Cards
const cardsOnDom = (array) => {
  let domString = '';
  for (const item of array) {
    domString += 
    `<div class="card item rcorners" style="width: 18rem;">
  <div class="card-body">
  <header class="nameColor">${item.name}</header>
    <img src="${item.imageUrl}" class="card-img-top" alt="...">
  <span class="caption">${item.color}</span>
  <p>${item.specialSkill}</p>
    </div>
<footer class="list-group-item color-${item.type}">${item.type} <button class="btn-delete" id="delete--${item.id}">X</button>
</footer>  
</div>`
};
  console.log(pets)
  renderToDom('#cardContainer', domString);
};

// EVENT LISTENERS  //
const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'));

// FILTER BUTTON ROW
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    console.log("You clicked a filter button", e.target.id);
    if (e.target.id === "all"){
      cardsOnDom(pets);
    } else if (e.target.id === "cats") {
      const cats = pets.filter(taco => taco.type === "cat");
      cardsOnDom(cats);
    } else if (e.target.id === "dogs") {
      const dogs = pets.filter(taco => taco.type === "dog");
      cardsOnDom(dogs);
    } else if (e.target.id) {
      const dinos = pets.filter(taco => taco.type === "dino");
      cardsOnDom(dinos);
    } 
  });

// FORM SUBMIT
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const newPet = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value
    }
  


console.log(pets);
  pets.push(newPet) ; 
  console.log(pets);
  cardsOnDom(pets)
  
  formModal.hide() 
  form.reset();
});

// DELETE BUTTON
document.querySelector('#cardContainer').addEventListener('click', (e) => {
  if (e.target.id) {
  const [method, id] = e.target.id.split("--"); 
    const index = pets.findIndex(taco => taco.id === parseInt(id))
    console.log(id);
    if (e.target.id.includes('delete')) {
      console.log("Delete Button Pressed")
      pets.splice(index, 1);
      cardsOnDom(pets)
      
    }
  }
});

};


// START APP
const startApp = () => {
  addPetModal();
  filterButtons();
  cardsOnDom(pets);
  eventListeners(); 
};

startApp();
