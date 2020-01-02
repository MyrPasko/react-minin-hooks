import React, { useContext, useEffect } from 'react';
import GithubContext from '../context/github/githubContext';
import { Link } from 'react-router-dom';
import Repos from '../components/Repos';

export const Profile = ({ match }) => {
  const {
    getUser,
    getRepos,
    loading,
    user,
    repos,
  } = useContext(GithubContext);
  const { name: urlName } = match.params;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  console.log('[Match]', match);

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">To Main</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={login}
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && <>
                <h3>BIO</h3>
                <p>{bio}</p>
              </>}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong>{login}
                </li>}

                {blog && <li>
                  <strong>Website: </strong>{blog}
                </li>}
              </ul>

              <div className="badge badge-primary m-4">
                Following: {following}
              </div>
              <div className="badge badge-success m-4">
                Followers: {followers}
              </div>
              <div className="badge badge-info m-4">
                Public repos: {public_repos}
              </div>
              <div className="badge badge-dark m-4">
                Public gists: {public_gists}
              </div>
            </div>
          </div>
        </div>

        <Repos repos={repos} />
      </div>
    </>
  );
};
