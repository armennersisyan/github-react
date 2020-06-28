import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditableUser from './EditableUser';
import UsersListLoader from './UsersListLoader';
import styles from "./styles.module.scss";

class UsersList extends PureComponent {
  render() {
    const { users, isLoading } = this.props;
    return (
      <div className="container">
        { !isLoading ? (
          <div className="row">
            {users && users.map((user, index) => (
              <EditableUser
                key={user.id}
                user={user}
                style={{transitionDelay: `${index * 70}ms`}}
              />
            ))}
          </div>
        ) : (
          <UsersListLoader />
        )}
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default UsersList;
