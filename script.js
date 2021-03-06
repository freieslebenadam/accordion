// Accordion data
const data = [
  { title: "Nadpis 1", description: "Toto je odstavec prvního řádku komponenty accordion" },
  { title: "Nadpis 2", description: "Toto je odstavec druhého řádku komponenty accordion" },
  { title: "Nadpis 3", description: "Toto je odstavec třetího řádku komponenty accordion" }
];

// General function for creating DOM elements
const createDOMElement = (tag, classNames, text) => {
  const element = document.createElement(tag);

  // Add classNames to this element
  if (classNames) {
    if (typeof classNames === "string") {
      element.classList.add(classNames);
    } else if (Array.isArray(classNames)) {
      classNames.forEach(className => {
        if (typeof className === "string") {
          element.classList.add(className);
        }
      });
    }
  }

  // Add innerText to this element
  if (text && typeof text === "string") {
    element.innerText = text;
  }

  return element;
};

// Open accordion item
const openAccordionItem = accordionItem => {
  const body = accordionItem.querySelector(".accordion-item-body");

  accordionItem.classList.add("active");
  body.style.maxHeight = `calc(${body.scrollHeight}px + 2rem)`;
};

// Close accordion item
const closeAccordionItem = accordionItem => {
  const body = accordionItem.querySelector(".accordion-item-body");

  accordionItem.classList.remove("active");
  body.style.maxHeight = 0;
}

// Accordion item generation
const generateAccordionItem = (title, description) => {
  const item = createDOMElement("div", "accordion-item");

  const itemHeader = createDOMElement("header");
  const itemBody = createDOMElement("div", "accordion-item-body");

  const itemHeaderTitle = createDOMElement("h2", null, title);
  const itemBodyContent = createDOMElement("p", null, description);

  itemHeader.append(itemHeaderTitle);
  itemBody.append(itemBodyContent);

  item.append(itemHeader);
  item.append(itemBody);

  // Header click functionality
  itemHeader.addEventListener("click", () => {
    const allAccordionItems = document.querySelectorAll(".accordion-item");
      
    // Close all accordion items
    allAccordionItems.forEach(accordionItem => {
      if (accordionItem === item && !item.classList.contains("active")) {
        openAccordionItem(accordionItem);
      } else {
        closeAccordionItem(accordionItem);
      }
    });
  });

  return item;
};

// Full accordion component generation
const generateAccordion = data => {
  const accordion = createDOMElement("article", "accordion");

  data.forEach(item => {
    const accordionItem = generateAccordionItem(item.title, item.description);
    accordion.append(accordionItem);
  });

  return accordion;
}

// Mount and render accordion
window.onload = () => {
  const mountElement = document.querySelector("[data-accordion]");
  const accordion = generateAccordion(data);
  mountElement.append(accordion);
};