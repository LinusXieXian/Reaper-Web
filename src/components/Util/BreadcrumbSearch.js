/**
 * Created by st on 2017/8/25.
 */
import React, {Component} from 'react';
import styles from './BreadcrumbSearch.css';
import MyBreadcrumb from '../Layout/Breadcrumb';
import FundSearchInput from '../FundList/FundSearchInput'

class BreadcrumbSearch extends Component {
  render() {
    return (
      <div className="container">
        {/*<div className={styles.leftDiv}>*/}
          {/*<MyBreadcrumb items={[1, 2, 3]}/>*/}
        {/*</div>*/}
        <FundSearchInput/>
      </div>
    )
  }
}

export default BreadcrumbSearch;
