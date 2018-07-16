import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeTabs } from '../../redux/actions';


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    namespace: PropTypes.string.isRequired,
    initialTab: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.initializeTabs(this.props.namespace, this.props.initialTab);
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeTabs,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(Tabs);
