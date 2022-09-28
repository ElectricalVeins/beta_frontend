import { notification } from 'antd';

const getDefaultNotificationConfig = () => ({
  top: 60,
  duration: 5,
  // icon: ReactNode,
});

export const notificateError = (err, config = {}) =>
  notification.error({
    ...getDefaultNotificationConfig(),
    ...config,
    description: err.message,
  });

export const notificateInfo = (info, config = {}) =>
  notification.error({
    ...getDefaultNotificationConfig(),
    ...config,
    description: info,
  });
