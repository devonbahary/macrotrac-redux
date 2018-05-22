import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user';
import Notification from '../Notification';
import UserForm from './UserForm';

export class UserPage extends React.Component {
    state = {
      updatedUser: false,
      err: ''
    };

    onError = () => {
        this.setState(() => ({ err: 'Sum of ratios must be 100%.' }));
    }

    onUserSave = (user) => {
        this.setState(() => ({
          err: '',
          updatedUser: true
        }));
        this.props.dispatch(updateUser(user));
    }

    render() {
        const notification = this.state.err ? this.state.err : (
          this.state.updatedUser ? (
            'Saved user settings.'
          ) : (
            'Adjust your personal goals.'
          )
        );

        return (
            <div>
                <Notification notification={notification} error={!!this.state.err} success={this.state.updatedUser} />
                <UserForm
                  user={this.props.user}
                  onSubmit={this.onUserSave}
                  onError={this.onError}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(UserPage);
