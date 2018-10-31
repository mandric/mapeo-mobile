import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SyncView from './SyncView';

import { createDevice } from '../../../mocks/devices';

const announceSync = () => console.log('announced sync!');
const unannounceSync = () => console.log('unannounced sync!');
const clearSyncTarget = () => console.log('cleared sync target!');
const sync = (device) => console.log(`syncing ${device.name}`);
const navigation = {
  state: {},
  dispatch: () => {},
  addListener: () => { return { remove: () => {} }; },
  getParam: () => {},
  isFocused: () => {},
  goBack: () => {},
  navigate: () => {},
  setParams: () => {}
};
const device1 = createDevice({
  id: 'aldo',
  name: "Aldo's Macbook Pro"
});
const syncingDevice = createDevice({
  id: 'cindy',
  name: "Cindy's Macbook Pro",
  syncStatus: 'replication-progress'
});

storiesOf('SyncView', module)
  .add('with no devices', () => (
    <SyncView
      devices={[]}
      announceSync={announceSync}
      unannounceSync={unannounceSync}
      clearSyncTarget={clearSyncTarget}
      sync={sync}
      navigation={navigation}
    />
  ))
  .add('with one mock device', () => (
    <SyncView
      devices={[device1]}
      announceSync={announceSync}
      unannounceSync={unannounceSync}
      clearSyncTarget={clearSyncTarget}
      sync={sync}
      navigation={navigation}
    />
  ))
  .add('with two mock device', () => (
    <SyncView
      devices={[device1, syncingDevice]}
      announceSync={announceSync}
      unannounceSync={unannounceSync}
      clearSyncTarget={clearSyncTarget}
      sync={sync}
      navigation={navigation}
      syncTarget={syncingDevice.id}
    />
  ));
