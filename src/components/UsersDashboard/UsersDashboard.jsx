import React, { PureComponent } from 'react';
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';
import UsersListTitle from '../UsersList/UsersListTitle';
import { getUsers, getUsersProfiles } from "../../services/client";

class UsersDashboard extends PureComponent {
  state = {
    isLoading: false,
    search: '',
    users: [],
    usersProfiles: [],
    usersSearched: [],
  }
  
  componentDidMount() {
    this.setState({ isLoading: true })
    this.requestUsers()
      .then((r) => this.requestUsersProfiles(r))
      .then((r) => this.initUsersSearched(r))
      .then(() => this.setState({ isLoading: false }))
  }
  
  handleSearchChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      search: value
    })
    
    const usersSearched = this.state.usersProfiles.filter(user => {
      return user.login.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
    });
    this.setState({
      usersSearched: [...usersSearched]
    })
  }
  
  requestUsers = async () => {
    let users = await getUsers()
    this.setState({ users })
    return users
  }
  
  requestUsersProfiles = async (users) => {
    const users_logins = users && users.map(u => u.login);
    let usersProfiles = await getUsersProfiles(users_logins)
    this.setState({ usersProfiles })
    return usersProfiles
  }
  
  initUsersSearched = (usersSearched) => {
    this.setState({ usersSearched })
  }
  
  render() {
    const { search, usersSearched, isLoading } = this.state
    return (
      <>
        <Header
          isLoading={isLoading}
          search={search}
          onChange={this.handleSearchChange}
        />
        <UsersListTitle users={usersSearched} />
        <UsersList
          isLoading={isLoading}
          users={usersSearched}
        />
      </>
    );
  }
}

export default UsersDashboard;
