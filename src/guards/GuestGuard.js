import PropTypes from 'prop-types';
// hooks
// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  return <>{children}</>;
}
