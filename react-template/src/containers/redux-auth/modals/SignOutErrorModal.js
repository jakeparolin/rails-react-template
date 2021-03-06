import React from 'react';
import { hideSignOutErrorModal } from '../../../actions/redux-auth/ui';
import Modal from './Modal';

class SignOutErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass='sign-out-error-modal'
        title='Sign Out Error'
        closeAction={hideSignOutErrorModal}>
        <p>
          The server encountered an error while trying to sign you out. Your
          account information has been wiped from this browser, but you mayValue
          want to sign in and then sign back out again to resolve any issues.
        </p>
      </Modal>
    );
  }
}

export default SignOutErrorModal;
