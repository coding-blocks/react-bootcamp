// initialize react here
import React from 'react';
import { render } from 'react-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './styles/main.scss';

import { fetchCategories, fetchImages } from './actions';

class App extends React.Component {
  state = {
    loading: true,
    showCategories: false,
    categories: [],
    cats: [],
    selected: null,
  };

  fetchCats = async (selected = this.state.selected) => {
    const cats = await fetchImages({ limit: 10, page: 1, category_id: selected.id });

    return this.setState({
      cats,
      loading: false,
    });
  };

  async componentDidMount() {
    const categories = await fetchCategories();

    await this.setState({
      categories,
      selected: categories[0],
    });

    return this.fetchCats(categories[0]);
  }

  handleCategoryChange = async selected => {
    await this.setState({ selected, loading: true });

    return this.fetchCats();
  };

  renderCategories = () => {
    const { categories, showCategories, selected } = this.state;

    return (
      <Dropdown
        isOpen={showCategories}
        toggle={() =>
          this.setState(state => ({
            showCategories: !state.showCategories,
          }))
        }>
        <DropdownToggle>{selected.name}</DropdownToggle>
        <DropdownMenu>
          {categories.map(category => (
            <DropdownItem key={category.id} onClick={() => this.handleCategoryChange(category)}>
              {category.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  };

  renderCats = () => {
    const { cats } = this.state;

    return (
      <div className="container-flex">
        <div className="row">
          {cats.map(({ id, url }) => (
            <div className="col-12 col-md-4" key={id}>
              <img className="cat-img" src={url} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <h1>Loading</h1>;
    }

    return (
      <div>
        {this.renderCategories()}
        {this.renderCats()}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
