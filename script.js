// Accordion data
const data = [
  { title: "Nadpis 1", description: "Toto je odstavec prvního řádku komponenty accordion" },
  { title: "Nadpis 2", description: "Toto je odstavec druhého řádku komponenty accordion" },
  { title: "Nadpis 3", description: "Toto je odstavec třetího řádku komponenty accordion" }
];

// General function for creating DOM elements
const createDOMElement = (tag, classNames = null, text = null) => {
  const element = document.createElement(tag);

  // Add classNames to this element
  if (classNames) {
    if (typeof classNames === "string") {
      element.classList.add(classNames);
    } else if (typeof classNames === "array") {
      classNames.forEach(className => {
        if (typeof className === "string") {
          element.classList.add(className);
        }
      });
    }
  }

  // Add innerText to this element
  if (text) {
    if (typeof text === "string") {
      element.innerText = text;
    }
  }

  return element;
};

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

  return item;
};

// Full accordion component generation
const generateAccordion = (data) => {
  const accordion = createDOMElement("article", "accordion");

  const accordionItems = data.map(item => generateAccordionItem(item.title, item.description));

  accordionItems.forEach(accordionItem => {
    accordion.append(accordionItem);
  });

  return accordion;
}

// Mount and render accordion
const mountElement = document.querySelector("[data-accordion]");
const accordion = generateAccordion(data);
mountElement.append(accordion);