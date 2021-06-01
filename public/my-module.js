const theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);

const statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;


import{theShire , buckland} from './another-module.js';
export{theShire,statement};

