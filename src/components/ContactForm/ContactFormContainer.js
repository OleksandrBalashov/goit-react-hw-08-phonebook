import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
