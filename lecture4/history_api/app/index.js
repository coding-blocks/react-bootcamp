const render = () => {
  const path = window.location.pathname;

  const p = document.createElement('p');
  const button = document.createElement('button');

  let message = (next = text = '');

  switch (path) {
    case '/login':
      message = 'This is a login page';
      text = 'Login';
      next = '/profile';
      break;
    case '/profile':
      message = 'This is a profile page';
      text = 'logout';
      next = '/';
      break;
    case '/':
      message = 'This is home page';
      text = 'Login';
      next = '/login';
      break;
    default:
      message = '404 not found';
      text = 'Go to home';
      next = '/';
      break;
  }

  p.innerText = message;
  button.innerText = text;
  button.onclick = () => {
    window.history.pushState({}, text, next);
    render();
  };

  document.body.innerHTML = '';
  document.body.appendChild(p);
  document.body.appendChild(button);
};

render();

window.onpopstate = () => render();
