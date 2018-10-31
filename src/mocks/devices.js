// @flow

export const createDevice = (device?: any) => ({
  id: '0',
  name: 'deviceName',
  port: 5000,
  host: 'localhost',
  syncStatus: null,

  ...device
});
