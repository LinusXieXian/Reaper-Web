/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './FundManagerInfo.css';
import DivHeader from '../Util/DivHeader';
import {Table, Button, Tabs} from 'antd';

import ManagerCharts from "./ManagerCharts";
import FundManagerRadarChart from "../Chart/FundManagerRadarChart";

const TabPane = Tabs.TabPane;

const columns = [{
  title: '基金代码',
  dataIndex: 'fundID',
}, {
  title: '基金名称',
  dataIndex: 'fundName',
}, {
  title: '基金类型',
  dataIndex: 'fundType',
}, {
  title: '规模（亿元）',
  dataIndex: 'scale',
}, {
  title: '任职时间',
  dataIndex: 'workDate',
}, {
  title: '任职天数',
  dataIndex: 'workTime',
}, {
  title: '任职回报',
  dataIndex: 'workReturn',
}];

const data = [{
  key: '1',
  fundID: 'John Brown',
  fundName: 32,
  fundType: 'New York No. 1 Lake Park',
  scale: 1,
  workDate: 1,
  workTime: 1,
  workReturn: 1
}, {
  key: '2',
  fundID: 'Jim Green',
  fundName: 42,
  fundType: 'London No. 1 Lake Park',
  scale: 1,
  workDate: 1,
  workTime: 1,
  workReturn: 1
}, {
  key: '3',
  fundID: 'Joe Black',
  fundName: 32,
  fundType: 'Sidney No. 1 Lake Park',
  scale: 1,
  workDate: 1,
  workTime: 1,
  workReturn: 1
}];


class FundManagerInfo extends Component {

  render() {
    const {allManagers, activeManager} = this.props;
    return (
      <div className="container">
        <div className={styles.totalInfoDiv}>
          <div className={styles.managerNameDiv}>
            <div className={styles.managerPhoto}>

            </div>
            <div className={styles.managerInfo}>
              <p className={styles.managerName}>董阳阳</p>
              <p className={styles.managerOtherInfo}>累积任职时间：
                <span className={styles.workingTime}>4年又149天</span>
              </p>
              <p className={styles.managerOtherInfo}>任职起始时间：
                <span className={styles.workStartDate}>2013-03-11</span>
              </p>
              <p className={styles.managerOtherInfo}>现任基金公司：
                <span className={styles.companyName}>华夏基金管理有限公司</span>
              </p>
            </div>
          </div>

          <div className={styles.fundScaleDiv}>
            <p className={styles.divTitle}>现任基金资产总规模</p>
            <span className={styles.fundNumber}>56.50</span>
            <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;亿元</span>
          </div>
          <div className={styles.fundReturnDiv}>
            <p className={styles.divTitle}>任职期间最佳基金回报</p>
            <span className={styles.fundNumber}>65.83</span>
            <span className={styles.numberUnit}>&nbsp;&nbsp;&nbsp;%</span>
          </div>
        </div>

        <div className={styles.introductionDiv}>
          <div className={styles.infoChartDiv}>
            <FundManagerRadarChart/>
          </div>
          <div className={styles.managerIntroDiv}>
            <DivHeader>基金经理简介</DivHeader>
            <p className={styles.managerIntro}>
              董阳阳先生,美国波士顿学院金融学硕士、工商管理学硕士。曾任中国国际金融有限公司投行业务部经理。2009年8月加入华夏基金管理有限公司,曾任研究员、基金经理助理、投资经理等,现任股票投资部总监,华夏蓝筹核心混合型证券投资基金(LOF)基金经理(2013年3月11日起任职)、华夏成长证券投资基金基金经理(2015年1月7日起任职)。
            </p>
          </div>
        </div>

        <div className={styles.fundHistoryDiv}>
          <DivHeader>历史管理基金</DivHeader>
          <div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false}/>
          </div>

        </div>

        <ManagerCharts/>


      </div>
    )
  }
}

FundManagerInfo.propTypes = {};

function mapStateToProps(state) {
  return {
    allManagers: state.fundManager.allManagers,
    activeManager: state.fundManager.activeManager,
  };
}

export default connect(mapStateToProps)(FundManagerInfo);
