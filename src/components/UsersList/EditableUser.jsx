import React from 'react';
import { getUser } from '../../services/client'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

function EditableUser({ user }) {
  // function requestUser(url) {
  //   getUser(url)
  // }
  return (
    <div className="col-4">
      <div className={ styles['editable-user'] }>
        <img src={ user.avatar_url } alt={ user.login } className={ styles['editable-user__avatar'] } />
        <h4 className={ styles['editable-user__login'] }>{ user.login }</h4>
        <p className={ styles['editable-user__type'] }>{ user.type }</p>
        <a href={ user.html_url } className={ styles['editable-user__profile-btn'] } target="blank">Github Profile</a>
        {/*<button onClick={() => requestUser(user.login)}>Req</button>*/}
      </div>
    </div>
  );
}

EditableUser.propTypes = {
  user: PropTypes.object,
};

export default React.memo(EditableUser);
