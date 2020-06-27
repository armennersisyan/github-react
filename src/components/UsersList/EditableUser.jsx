import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

function EditableUser({ user, ...rest }) {
  return (
    <div className="col-4" { ...rest }>
      <div className={ styles['editable-user'] }>
        <img src={ user.avatar_url } alt={ user.login } className={ styles['editable-user__avatar'] } />
        <h4 className={ styles['editable-user__login'] }>{ user.login }</h4>
        <p className={ styles['editable-user__type'] }>{ user.type }</p>
        <a href={ user.html_url } className={ styles['editable-user__profile-btn'] } target="blank">
          <i className="ti-github" />
          Github Profile
        </a>
        <div className={ styles['editable-user__info'] }>
          
        </div>
      </div>
    </div>
  );
}

EditableUser.propTypes = {
  user: PropTypes.object,
};

export default React.memo(EditableUser);
