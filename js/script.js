var menu = [
    {
        id: 1,
        title: "buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://ellerepublic.de/wp-content/uploads/2016/09/Buttermilch-pfannkuchen.jpg",
        info: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "diner Double",
        category: "lunch",
        price: 13.99,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/12/0a/e1/77/double-burger-menu.jpg",
        info: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
        id: 3,
        title: "godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        info: "mbucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "country Delight",
        category: "breakfast",
        price: 20.99,
        img: "https://images.eatsmarter.de/sites/default/files/styles/576x432/public/english-breakfast-mit-sojawuerstchen-666085.jpg",
        info: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
        id: 5,
        title: "egg Attack",
        category: "lunch",
        price: 22.99,
        img: "https://cdn.happyegg.com/filer_public/9e/10/9e10461d-983f-4cd8-836f-0950cf855b7b/rockysunrisebacon_eggburger.jpg",
        info: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 6,
        title: "oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2014/12/Top-10-Best-Drinks-to-Make-With-Oreos-7.jpg?resize=600%2C490&ssl=1",
        info: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 7,
        title: "bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Bacon%2C_egg%2C_and_cheese_on_bread.jpg",
        info: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 8,
        title: "american Classic",
        category: "lunch",
        price: 12.99,
        img: "https://www.thespruceeats.com/thmb/d_CBWohALTBonJbJV7SqvOTub-E=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1007332466-0d5d1b4e17634df8926ef5d572a4f898.jpg",
        info: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
        id: 9,
        title: "quarantine Buddy",
        category: "shakes",
        price: 16.99,
        img: "https://www.cdc.gov/foodsafety/images/comms/Getty-585588212-eating-out.jpg",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
        id: 10,
        title: "steak Dinner",
        category: "dinner",
        price: 39.99,
        img: "https://i.pinimg.com/originals/f2/e4/78/f2e4785078fb9de2b1b1ba29fe80848e.png",
        info: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
];

var menuCenter = document.querySelector(".menu"),
    btnContainer = document.querySelector(".btn-container"),
    filterBtn = document.querySelectorAll(".filter-btn");

    window.addEventListener("DOMContentLoaded", function(){
        displayMenuItems(menu);

        
    });

function displayMenuItems(menuItems){
    var displayItems = menuItems.map(function(items){
        // console.log(items)
            return `<article class="menu-item">
            <div class="foto">
            <img src=${items.img} alt=${items.title}>
            </div>
            <div class="item-info">
                <div class="header">
                    <h3>${items.title}</h3>
                    <h4 class="price">$${items.price}</h4>
                </div>
                <p>${items.info}</p>
            </div>
        </article>`

        })
        displayItems = displayItems.join("");
  // console.log(displayItems)
    
    menuCenter.innerHTML = displayItems;
}


filterBtn.forEach(function(btn){
  btn.addEventListener("click", function(e){
    
    var categories = e.currentTarget.dataset.id;
    var menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === categories){
        return menuItem;
      }
    });
    
    if(categories === "all"){
      return displayMenuItems(menu)
    }else{
      return displayMenuItems(menuCategory)
    }
    
    
  });
})
