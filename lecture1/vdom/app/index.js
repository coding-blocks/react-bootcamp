import { h, create, diff, patch } from 'virtual-dom';

const generateList = size =>
  [...Array(Math.min(size, 26))].map((_, index) => ({
    name: String.fromCharCode(97 + index),
    email: `${String.fromCharCode(97 + index)}@gmail.com`,
  }));

const state = {
  total: 26,
  list: generateList(5),
};

const loadMore = () => {
  const { list } = state;
  state.list = generateList(list.length + 5);

  render();
};

const renderList = list =>
  h(
    'ul#list',
    { style: { fontSize: '20px', padding: '0', margin: '75px 0 30px 0' } },
    list.map(({ name, email }) =>
      h('li', { key: email, style: { fontSize: '30px' } }, [`Email: ${email} Name: ${name}`]),
    ),
  );

const renderLoadMore = () =>
  h(
    'button',
    {
      style: {
        fontSize: '16px',
        background: 'none',
        padding: '6px 15px',
        border: '2px solid blue',
        cursor: 'pointer',
      },
      onclick: loadMore,
    },
    ['Load More'],
  );

const renderApp = (list, total) =>
  h(
    'div#app',
    {
      style: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '200px 100px 100px',
        boxSizing: 'border-box',
      },
    },
    [
      h('h1', { style: { display: 'block', textAlign: 'center' } }, ['Contact List']),
      renderList(list),
      total > list.length ? renderLoadMore() : null,
    ],
  );

let tree = renderApp(state.list, state.total);
let rootNode = create(tree);
document.body.appendChild(rootNode);

const render = () => {
  const newTree = renderApp(state.list, state.total);
  const patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
};
