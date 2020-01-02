import React, {useContext} from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  if (!alert) {
    return null
  }
  const { text, type } = alert;

  return (
    <div
      className={`alert alert-${type || 'secondary'} alert-dismissible fade show`}
      role="alert"
    >
      {text}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
