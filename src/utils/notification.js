import { notification } from 'antd';

const getNotificationConfig = (config) => ({
  top: 60,
  duration: 5,
  ...config,
  // icon: ReactNode,
});

export const notificateError = (err, config = {}) =>
  notification.error({
    ...getNotificationConfig(config),
      description: Array.isArray(err.message) ? err.message?.join('|') : err.message,
  });

export const notificateInfo = (info, config = {}) =>
  notification.info({
    ...getNotificationConfig(config),
    description: info,
  });
