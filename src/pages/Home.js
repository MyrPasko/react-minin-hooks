import React, { useContext } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import GithubContext from '../context/github/githubContext';

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  console.log('[USERS]', users);
  const performedUsers = users.length
    ? users.map((user, i) => (
      <div key={user.id} className="col-sm-4 mb-4">
        <Card user={user} />
      </div>
    ))
    : null;

  return (
    <>
      <Search />
      <div className="row">

        {loading
          ? <div className="text-center">Loading...</div>
          : performedUsers
        }

      </div>
    </>
  );
};
