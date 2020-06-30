import React, { PureComponent } from 'react';
import styles from './styles.module.scss'

class UsersListLoader extends PureComponent {
  render() {
    const loopedSkeletons = []
    for (let i = 0; i < 15; i++) {
      loopedSkeletons.push(<span className='indent' key={i} />);
    }
    return (
      <div className="row">
        { loopedSkeletons && loopedSkeletons.map((_, index) => (
          <div className="col-md-4 col-sm-6 col-12" key={index}>
            <div className={styles['editable-user']}>
              <div className={styles['editable-user__inner']}>
                <div className={styles['editable-user__avatar--loader']}/>
                <div className={styles['editable-user__login--loader']} />
                <div className={styles['editable-user__type--loader']} />
                <div className={styles['editable-user__profile-btn--loader']} />
              </div>
              <div className={`${styles['editable-user__info']} row no-gutters`}>
                <div className={`${styles['editable-user__info-item']} col-4`}>
                  <div className={styles['icon-loader']} />
                </div>
                <div className={`${styles['editable-user__info-item']} col-4`}>
                  <div className={styles['icon-loader']} />
                </div>
                <div className={`${styles['editable-user__info-item']} col-4`}>
                  <div className={styles['icon-loader']} />
                </div>
              </div>
            </div>
          </div>
        )) }
      </div>
    );
  }
}

export default UsersListLoader;
