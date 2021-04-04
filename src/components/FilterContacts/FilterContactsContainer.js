import { connect } from 'react-redux';
import { filterContacts, getFilter } from '../../redux/contacts';
import FilterContacts from './FilterContacts';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
  onClick: () => dispatch(filterContacts('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
