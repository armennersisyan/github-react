import React from 'react';
import styles from './style.module.scss'
import PropTypes from "prop-types";

function Header({ search, isLoading, onChange }) {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className={styles['users-search']}>
              <input
                type="text"
                placeholder="Search for users by login..."
                disabled={isLoading}
                value={search}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onChange: PropTypes.any,
};

export default Header;
