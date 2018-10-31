import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DeviceCell from './DeviceCell';

import { createDevice } from '../../../mocks/devices';

const device = createDevice();
const onPress = (device) => console.log(`pressed ${device.name}`);

storiesOf('DeviceCell', module)
  .add('with device unselected', () => (
    <DeviceCell
      device={device}
      onPress={onPress}
      selected={false}
    />
  ))
  .add('with device selected', () => (
    <DeviceCell
      device={device}
      onPress={onPress}
      selected={true}
    />
  ));
