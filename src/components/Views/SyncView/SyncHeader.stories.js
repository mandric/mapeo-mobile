import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SyncHeader from './SyncHeader';

const back = () => console.log('back!');

// progress text
const syncInitiated = 'Sync initiated...';
const syncProgress = 'Sync in progress...';
const syncStopped = 'Sync stopped...';
const syncCompleted = 'Sync completed';
const deviceSelected = 'Device Selected';

storiesOf('SyncHeader', module)
  .add('with sync initiated', () => (
    <SyncHeader
      back={back}
      progressText={syncInitiated}
      syncStopped={false}
    />
  ))
  .add('with sync progress', () => (
    <SyncHeader
      back={back}
      progressText={syncProgress}
      syncStopped={false}
    />
  ))
  .add('with sync stopped', () => (
    <SyncHeader
      back={back}
      progressText={syncStopped}
      syncStopped={true}
    />
  ))
  .add('with sync completed', () => (
    <SyncHeader
      back={back}
      progressText={syncCompleted}
      syncStopped={false}
    />
  ))
  .add('with device selected', () => (
    <SyncHeader
      back={back}
      progressText={deviceSelected}
      syncStopped={false}
    />
  ));
