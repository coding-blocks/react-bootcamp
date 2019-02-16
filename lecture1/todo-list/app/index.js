import { h, create, diff, patch } from 'virtual-dom';

const state = {
  items: [
    {
      title: 'sample'
    }
  ],
};

const renderList = (items) => h('ul.items-list',{},
items.map((item, index)=> h('li', {key:index }, [item.title])));

const renderAddNew = () => h('input#add-new',{type: 'text', placeholder: 'title'});

const addItem = () => {
  const input = document.getElementById('add-new');

  console.log('clicked');
  state.items.push({
    title: input.value,
  });

  input.value = '';
  render();
};

const renderSubmit = () => h('button', {onclick: addItem}, ['Add']);

const renderApp = (items) => {
  return h('div#app', {}, [
    h('h1.heading',{}, ["Todo List"]),
    renderList(items),
    renderAddNew(),
    renderSubmit(),
  ]);

};

let tree = renderApp(state.items);
let rootNode = create(tree);
document.body.appendChild(rootNode);

const render = () => {
  const newTree = renderApp(state.items);
  const patches = diff(tree, newTree);

  rootNode = patch(rootNode, patches);
  tree = newTree;
};
