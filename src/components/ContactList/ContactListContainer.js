import { connect } from 'react-redux';
import ContactList from './ContactList';
import {
  deleteContact,
  editContact,
  getVisibleContacts,
} from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
  editContact: contact => dispatch(editContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
