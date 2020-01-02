import React from 'react';

const Repos = ({ repos }) => (
  <>
    {repos && repos.map(({id, html_url, name}) => (
      <div className="card mb-3" key={id}>
        <div className="card-body">
          <h5>
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >{name}</a>
          </h5>
        </div>
      </div>
    ))}
  </>
);

export default Repos;
