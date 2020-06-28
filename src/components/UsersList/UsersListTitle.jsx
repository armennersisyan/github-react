import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

class UsersListTitle extends PureComponent {
  render() {
    const { users } = this.props
    return (
      <div className="container">
        <div className={styles['users-list-title']}>
          <h1>Github Users List</h1>
          <p className="text-center mt-2">{users?.length || 'No'} users found</p>
        </div>
      </div>
    );
  }
}

UsersListTitle.propTypes = {
  users: PropTypes.array,
};

export default UsersListTitle;
