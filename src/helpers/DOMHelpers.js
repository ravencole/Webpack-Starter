export function appendChildren(target, children) {
    children.map(child => {
        target.appendChild(child);
    });

    return target;
}

export function createElement(type, attributes = {}, content = null) {
  const element = document.createElement(type);
  
  if (content) {
    element.appendChild(document.createTextNode(content));
  }
  
  for(let prop in attributes){
    element.setAttribute(prop, attributes[prop]);
  }
  
  return element;
}

export function insertFirst(target, element) {
  const appendedTarget = target.insertBefore(element, target.firstChild);
  return appendedTarget;
}