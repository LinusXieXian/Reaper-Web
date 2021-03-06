/**
 * Created by st on 2017/9/2.
 */
import React from 'react';
import {connect} from 'dva';
import MainLayout from "../components/Layout/MainLayout";
import CombinationList from "../components/Combination/CombinationList";

function CombinationPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <CombinationList/>
      </MainLayout>
    </div>
  )
}

CombinationPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(CombinationPage);
