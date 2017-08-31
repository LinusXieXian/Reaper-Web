/**
 * Created by st on 2017/8/25.
 */
import React from 'react';
import {connect} from 'dva';
import styles from "./FundManagerPage.css";
import MainLayout from "../components/Layout/MainLayout";
import FundManagerHeader from "../components/Util/FundHeader";
import FundManagerNav from "../components/FundManager/FundManagerNav";
import FundManagerInfo from "../components/FundManager/FundManagerInfo";


function FundManagerPage() {
  return (
    <div className="baseBody">
      <MainLayout>
        <FundManagerHeader/>
        <div className={styles.navDiv}>
          <FundManagerNav/>
        </div>
        <div className={styles.infoDiv}>
          <FundManagerInfo/>
        </div>
      </MainLayout>
    </div>
  )
}

FundManagerPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(FundManagerPage);
