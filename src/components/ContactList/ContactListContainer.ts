import { AppDispatch, RootState } from './../../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import ContactList from './ContactList';
import {
  deleteContact,
  editContact,
  getVisibleContacts,
} from '../../redux/contacts';
import { ContactType } from '../../interfaces/interfaces';

export type PropsContactList = ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onDeleteContact: (id: string | undefined) => dispatch(deleteContact(id)),
  editContact: (contact: ContactType | undefined) =>
    dispatch(editContact(contact)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ContactList);
