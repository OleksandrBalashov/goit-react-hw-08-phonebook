import { AppDispatch, RootState } from './../../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import { filterContacts, getFilter } from '../../redux/contacts';
import FilterContacts from './FilterContacts';

export type PropsFilter = ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterContacts(e.target.value)),
  onClick: () => dispatch(filterContacts('')),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FilterContacts);
