import PropTypes from 'prop-types';

function Filter({ filter, filterChang }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={filterChang}
        name="filter"
        value={filter}
        required
      />
    </label>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
  filterChang: PropTypes.func,
};

export default Filter;
