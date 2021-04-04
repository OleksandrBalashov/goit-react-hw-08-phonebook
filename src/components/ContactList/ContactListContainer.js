import { connect } from 'react-redux';
import ContactList from './ContactList';
import { deleteContact, getVisibleContacts } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
