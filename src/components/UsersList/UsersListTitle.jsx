import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

function UsersListTitle({ users, isLoading }) {
  return (
    <div className="container">
      <div className={styles['users-list-title']}>
        <h1>Github Users List</h1>
        <p className="text-center mt-2">
          { isLoading ? (
            'Loading...'
          ) : `${users?.length || 'No '} users found` }
        </p>
      </div>
    </div>
  )
}

UsersListTitle.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default UsersListTitle;
