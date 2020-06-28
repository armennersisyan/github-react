import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

class EditableUser extends PureComponent {
  render() {
    const { user, ...rest } = this.props;
    return (
      <div className="col-md-4 col-sm-6 col-12" {...rest}>
        <div className={styles['editable-user']}>
          <div className={styles['editable-user__inner']}>
            <img src={user.avatar_url} alt={user.login} className={styles['editable-user__avatar']}/>
            <h4 className={styles['editable-user__login']}>{user.name}</h4>
            <p className={styles['editable-user__type']}>{user.login}</p>
            <a href={user.html_url} className={styles['editable-user__profile-btn']} target="blank">
              <i className="ti-github"/>
              Github Profile
            </a>
          </div>
          <div className={`${styles['editable-user__info']} row no-gutters`}>
            <div className={`${styles['editable-user__info-item']} col-4`}>
              <i className="ti-arrow-up"/>
              <span>{ user.following }</span>
            </div>
            <div className={`${styles['editable-user__info-item']} col-4`}>
              <i className="ti-arrow-down"/>
              <span>{ user.followers }</span>
            </div>
            <div className={`${styles['editable-user__info-item']} col-4`}>
              <i className="ti-layout-media-center-alt"/>
              <span>{ user.public_repos }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditableUser.propTypes = {
  user: PropTypes.object,
};

export default EditableUser;
