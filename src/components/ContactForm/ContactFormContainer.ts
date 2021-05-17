import { ContactType } from './../../interfaces/interfaces';
import { connect, ConnectedProps } from 'react-redux';
import {
  addContact,
  getEditContact,
  patchContacts,
} from '../../redux/contacts';
import { RootState, AppDispatch } from '../../redux/store';
import ContactForm from './ContactForm';

export type PropsForm = ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  contact: getEditContact(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSubmitForm: (contact: ContactType) => dispatch(addContact(contact)),
  onPatchContact: (id: string, contact: ContactType) =>
    dispatch(patchContacts(id, contact)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ContactForm);
