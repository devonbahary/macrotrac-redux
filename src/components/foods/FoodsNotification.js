import React from 'react';
import { connect } from 'react-redux';

const FoodsNotification = (props) => (
    <p className="confirmed">{props.notification}</p>
);

const mapStateToProps = (state) => ({
  notification: state.foods.notification
});

export default connect(mapStateToProps)(FoodsNotification);
