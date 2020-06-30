import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

class EditableUser extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  
  state = {
    editMode: false,
    login: '',  
    name: '',  
  }
  
  handleEdit = () => {
    const { name, login } = { ...this.props.user }
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
      login: login,
      name: name,
    })
  )}
  
  handleSave = () => {
    this.setState( {
      editMode: false,
      login: '',
      name: '',
    })
    const editedData = {
      name: this.state.name,
      login: this.state.login,
    }
    this.props.userEdit(editedData, this.props.user.id)
  }
  
  handleChangeByKey = (evt, key) => {
    const newValue = evt.target.value;
    this.setState({
      [key]: newValue
    })
  }
  
  handleKeyPress = (evt, property_name) => {
    if(evt.keyCode === 13){
      this.handleChangeByKey(evt, property_name)
      this.handleSave()
    }
  }
  
  render() {
    const { user, userEdit, userDelete, ...rest } = this.props;
    const { editMode } = this.state;
    return (
      <div className="col-md-4 col-sm-6 col-12" {...rest}>
        <div className={styles['editable-user']}>
          <button
            className={styles['editable-user__delete-btn']}
            onClick={() => userDelete(user.login)}
          >
            <i className="ti-trash" />
          </button>
          { !editMode ?
            <button
              className={styles['editable-user__edit-btn']}
              onClick={this.handleEdit}
            >
              <i className="ti-marker-alt"/>
            </button> :
            <button
              className={styles['editable-user__edit-btn']}
              onClick={this.handleSave}
            >
              <i className="ti-check-box"/>
            </button>
          }
          <div className={styles['editable-user__inner']}>
            <img src={user.avatar_url} alt={user.login} className={styles['editable-user__avatar']}/>
            { !editMode ?
              <h4 className={styles['editable-user__login']}>{user.name}</h4>
              : <input 
                  type="text" 
                  value={this.state.name}
                  className={styles['editable-user__login--input']}
                  onChange={(evt) => this.handleChangeByKey(evt, 'name')}
                  onKeyUp={(evt) => this.handleKeyPress(evt, 'name')}
                />
            }
            { !editMode ?
              <p className={styles['editable-user__type']}>{user.login}</p>
              : <input
                  type="text"
                  className={styles['editable-user__type--input']}
                  value={this.state.login}
                  onChange={(evt) => this.handleChangeByKey(evt, 'login')}
                  onKeyUp={(evt) => this.handleKeyPress(evt, 'login')}
                />
            }
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

export default EditableUser;
