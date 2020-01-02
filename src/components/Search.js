import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/alertContext';
import GithubContext from '../context/github/githubContext';

const Search = (props) => {
  const [value, setValue] = useState('');
  const { alert, show, hide } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      // Make request with some data
      hide();
      console.log('[Request from Search]', value.trim());
      github.searchUsers(value.trim());
    } else {
      show('Enter user data.', 'warning');
    }
  };

  return (
    <div className="form-group">
      <input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        type="text" className="form-control"
        placeholder="Enter the user's name: "
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;
