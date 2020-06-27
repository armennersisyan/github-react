import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/client'
import EditableUser from './EditableUser';

function UsersList() {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState(false);
  
  async function requestUsers() {
    setLoading(true);
    let users = await getUsers()
    setUsers(users);
    setLoading(false);
  }
  
  // Did mount
  useEffect(() => {
    requestUsers()
  }, [])
  
  return (
    <div className="container">
      <div className="row">
        {users && users.map(user => (
          <EditableUser
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(UsersList);
