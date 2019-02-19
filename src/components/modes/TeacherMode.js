import React, { Fragment } from 'react';
import MainView from '../views/MainView';
import Header from '../layout/Header';
import SettingModal from '../description/cases/observing/SettingModal';
import './CommonStyle.css';

const TeacherMode = () => (
  <Fragment>
    <Header />
    <MainView />
    <SettingModal />
  </Fragment>
);

export default TeacherMode;
