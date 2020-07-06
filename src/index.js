import _ from "lodash";

function component(){
  const element = document.createElement('div')

  // Lodash is installed NOW
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //element.innerHTML = ['Hello', 'webpack'].join(' ')
  
  return element;
}

document.body.appendChild(component())
