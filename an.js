
//generating the header's text

const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, { resolveString: resolveString });

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    };

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, { partialString: partialString });

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, { offset: offset + 1 });

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } };



const strings = [
'MARIA KUNEVA','1st year Media Design student at Fontys University'
];


let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]') };


// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter++;

    if (counter >= strings.length) {
      counter = 0;
    }

    let nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
    resolver.resolve(nextOptions, callback);
  }, 2000);
}

resolver.resolve(options, callback);



////////////////////////////////////////////////////////
//divs appear on scroll 

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

////////////////////////////////////////////////////////////
// "scroll for more" disappear on scroll

let scrollpos = window.scrollY

const header = document.getElementById("section10")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("none")

window.addEventListener('scroll', function() { 
scrollpos = window.scrollY;

if (scrollpos >= scrollChange) { add_class_on_scroll() }


})


// defining variables //
var modalH = document.getElementById("Hermes");
var modalW = document.getElementById("Wine");
var modalL = document.getElementById("Layout");
var modalP = document.getElementById("Prototype");
var modalPL = document.getElementById("pl");
var modalV = document.getElementById("vid");
var modalL0 = document.getElementById("l0");
var modalL1 = document.getElementById("l1");
var modalA = document.getElementById("ag");
var modalPP = document.getElementById("pp");
var modalAP = document.getElementById("ap");
var modalCode = document.getElementById("code")
var modalWL = document.getElementById("wl");
var modalSM = document.getElementById("sm");
var modalG = document.getElementById("g");
var modalA = document.getElementById("an");
var modalPr1 = document.getElementById("pr1");
var modalPr2 = document.getElementById("pr2");
var modalCapi = document.getElementById("capi");
var modalWapi = document.getElementById("wapi");
var modalMemo = document.getElementById("memo");
var modalPR = document.getElementById("pr");
let modal=document.getElementsByClassName(".modal");
var body = document.getElementsByTagName("BODY")[0];


/* Toggles MODAL (it's with parameter so if you replace the parameter
  in the brackets with different modals) and prevents body from scrolling when the modal is open*/

function toggleModal(modal) {
  modal.classList.toggle("show-modal");
  body.classList.toggle("stopScroll");
}















