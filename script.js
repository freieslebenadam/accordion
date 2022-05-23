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