import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout'

function IndexPage() {
  return (
    <div className={styles.baseBody}>
      <MainLayout>
        <p>我是首页</p>
      </MainLayout>
    </div>

  );
}

IndexPage.propTypes = {};

function mapStateToProps(state) {
  return {
    // todos: state.sidebars.items
  };
}

export default connect(mapStateToProps)(IndexPage);
