const mainheading = document.body;

const hero = document.createElement('div');
mainheading.appendChild(hero);
hero.setAttribute('class' , 'page_sec')

const sec1 = document.createElement('section')
const elem1 = document.createElement('h2');
const container1 = document.createElement('div');
container1.setAttribute('class','landing__container')
elem1.style.cssText = " font-size: 40px; font-weight: bold;";
const photo = document.createElement('div');
photo.setAttribute('class','home-img') ;
sec1.appendChild(photo);
photo.style.float ='right'
photo.innerHTML = '<img class="HOME=IMG" src="./Images/0850B817-EAA8-4F02-9761-CE857BDABAF6.JPG"alt="">';

// *****************************************************


// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
gsap.from(".typing-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".social-icons", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".main-img img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});

gsap.from(".home-img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});


// *****************************************************

elem1.textContent = 'About me';
hero.appendChild(sec1);
sec1.appendChild(container1)
container1.appendChild(elem1)
const para1 = document.createElement('p');
para1.textContent = 'Hello, I am the student Bilal Muhammad Mahmoud Edoor, I study in the Faculty of Information Technology and Computer Engineering, specializing at Palestine Polytechnic University. This site provides an introduction to myself, the skills I possess, and some of the projects I have worked on.';
para1.style.cssText = "font-size: 18px;"


container1.appendChild(para1);

sec1.setAttribute('id',"section1")
sec1.setAttribute('data-nav',"section 1")
sec1.setAttribute('class',"your-active-class")


const sec2 = document.createElement('section')
const elem2 = document.createElement('h2');
const container2 = document.createElement('div');
container2.setAttribute('class','landing__container')
elem2.textContent = 'Projects';
elem2.style.cssText = " font-size: 40px; font-weight: bold;";

////----------------------------------------------------------------------------------

hero.appendChild(sec2);
sec2.appendChild(container2);
container2.appendChild(elem2)
sec2.setAttribute('id',"section2")
sec2.setAttribute('data-nav',"section 2")
sec2.setAttribute('class',"cards-container")


//create a cards
const C  = document.createElement('div');
C.setAttribute('class','cards')
sec2.appendChild(C);





    const container = document.getElementById('card-container');

const cardData = [
  {
    imageSrc: './Images/OIP.jpeg',
    title: 'Smart Driving',
    description: 'ESP32 Microcontroller',
    buttonText: 'Read More'
  },
  {
    imageSrc: './Images/store.jpeg',
    title: 'Bilal Stor',
    description: 'React Js',
    buttonText: 'Read More'
  },
  {
    imageSrc: './Images/assembler.jpeg',
    title: 'Assembler',
    description: 'Python',
    buttonText: 'Read More'
  },
  {
    imageSrc: './Images/address book.jpeg',
    title: 'Address Book',
    description: 'OOP using JAVA',
    buttonText: 'Read More'
  },
  {
    imageSrc: './Images/html css.jpeg',
    title: 'udacity p1',
    description: 'HTML , CSS',
    buttonText: 'Read More'
  },
  {
    imageSrc: './Images/port.jpeg',
    title: 'My portfolio',
    description: 'HTML CSS and JS',
    buttonText: 'Read More'
  },
  // Add more card data objects with different images, titles, and descriptions
];

for (let i = 0; i < cardData.length; i++) {
  const card = cardData[i];

  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.setAttribute = ("data-aos","fade-up")
 cardElement.setAttribute = ( "data-aos-duration","1000")
  const bannerImage = document.createElement('div');
  bannerImage.classList.add('banner-image');
  bannerImage.innerHTML = `<img src="${card.imageSrc}" alt="">`;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.innerHTML = `<h1>${card.title}</h1><p>${card.description}</p>`;

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  buttonWrapper.innerHTML = `<a href=""><button class="btn fill">${card.buttonText}</button></a>`;

  
  cardElement.appendChild(bannerImage);
  cardElement.appendChild(wrapper);
  cardElement.appendChild(buttonWrapper);

  C.appendChild(cardElement);
}

gsap.from(".card", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
//----------------------------------------------------------------------------------


const sec3 = document.createElement('section')
const elem3 = document.createElement('h2');
const container3 = document.createElement('div');
container3.setAttribute('class','landing__container')
elem3.style.cssText = " font-size: 40px; font-weight: bold;";


elem3.textContent = 'Skills';
hero.appendChild(sec3);
sec3.appendChild(container3);
container3.appendChild(elem3)
const para3 = document.createElement('p');
para3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
container3.appendChild(para3);
sec3.setAttribute('id',"section3")
para3.style.cssText = "font-size: 18px;"

//----------------------------------------------------------------------------------


const sec4 = document.createElement('section')
const elem4 = document.createElement('h2');
const container4 = document.createElement('div');
container4.setAttribute('class','landing__container')


elem4.textContent = 'Contact';
elem4.style.cssText = " font-size: 40px; font-weight: bold;";

hero.appendChild(sec4);
sec4.appendChild(container4)
container4.appendChild(elem4)
const para4 = document.createElement('p');
para4.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
para4.style.cssText = "font-size: 18px;"

container4.appendChild(para4);
sec4.setAttribute('id',"section4")
sec4.setAttribute('data-nav',"section 4")




  const btn = document.getElementsByClassName('.theme-button');
  btn.addEventListener('click',function (){
    const root = document.querySelector('html');
    root.classList.toggle('dark');

    if (root.classList.contains('dark')) {
      btn.textContent = 'Light Mode';
    } else {
      btn.textContent = 'Dark Mode';
    }
  });


  
