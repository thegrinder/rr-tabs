import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTab } from '../../redux/actions';


class TabInner extends Component {
  static propTypes = {
    namespace: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    setTab: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.onSelect(this.props.to);
    this.props.setTab(this.props.namespace, this.props.to);
  }

  render() {
    return this.props.children(this.handleClick);
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setTab,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(TabInner);
