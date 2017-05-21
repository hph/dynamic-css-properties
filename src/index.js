import { camelToKebab } from './utils';

function setCustomProperties (properties, node = document.documentElement) {
  Object.keys(properties).forEach((prop) => {
    node.style.setProperty(`--${camelToKebab(prop)}`, properties[prop]);
  });
}

export default setCustomProperties;
