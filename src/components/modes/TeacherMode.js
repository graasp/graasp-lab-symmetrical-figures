import React, { Fragment } from 'react';
import MainView from '../views/MainView';
import Header from '../layout/Header';
import SettingsModal from '../description/cases/observing/SettingsModal';
import './CommonStyle.css';

const TeacherMode = () => (
  <Fragment>
    <Header />
    <MainView />
    <SettingsModal />
  </Fragment>
);

export default TeacherMode;
