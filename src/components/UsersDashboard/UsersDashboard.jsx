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
    
    if (!this.state.usersProfiles || !this.state.usersProfiles.length) return
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
  
  handleUserDelete = (login) => {
    const usersProfiles = [ ...this.state.usersProfiles ]
    const usersSearched = [ ...this.state.usersSearched ]
    this.setState({
      usersProfiles: usersProfiles.filter(u => u.login !== login),
      usersSearched: usersSearched.filter(u => u.login !== login)
    })
  }
  
  handleUserEdit = (newData, user_id) => {
    const list = [ ...this.state.usersProfiles ]
    let editableUserIndex = list.findIndex((user) => user.id === user_id)
    list[editableUserIndex] = { ...list[editableUserIndex], ...newData }
    this.setState({
      usersProfiles: list,
      usersSearched: list
    })
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
        <UsersListTitle
          isLoading={isLoading}
          users={usersSearched}
        />
        <UsersList
          isLoading={isLoading}
          users={usersSearched}
          userDelete={this.handleUserDelete}
          userEdit={this.handleUserEdit}
        />
      </>
    );
  }
}

export default UsersDashboard;
