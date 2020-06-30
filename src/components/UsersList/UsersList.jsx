import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditableUser from './EditableUser';
import UsersListLoader from './UsersListLoader';

class UsersList extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  };
  
  render() {
    const { users, userEdit, userDelete, isLoading } = this.props;
    return (
      <div className="container">
        { !isLoading ? (
          <div className="row">
            {users && users.map((user) => (
              <EditableUser
                key={user.id}
                user={user}
                userDelete={userDelete}
                userEdit={userEdit}
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

export default UsersList;
