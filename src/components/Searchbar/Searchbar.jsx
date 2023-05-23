import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Input, Button, Icon } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Enter a pokemon name!');
      return;
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmitForm}>
        <Button type="submit" area-label="search picture">
          <Icon />
        </Button>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
