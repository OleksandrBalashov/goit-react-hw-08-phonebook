import { connect } from 'react-redux';
import {
  addContact,
  getEditContact,
  patchContacts,
} from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contact: getEditContact(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
  onPatchContact: (id, contact) => dispatch(patchContacts(id, contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
