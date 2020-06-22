import React from 'react';
import Context from '../../context/Context';
import DashboardChart from './DashboardChart';

const CustomerDashboard = () => (
  <Context.Consumer>
    {({ customerBarData, customerPaiData }) => <DashboardChart barData={customerBarData} pieData={customerPaiData} />}
  </Context.Consumer>
);

export default CustomerDashboard;
