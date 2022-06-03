import { notification } from 'antd';

enum SEVERITY_LEVELS_ENUM {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const useNotification = () => {
  const sendNotification = (
    severity: SEVERITY_LEVELS_ENUM,
    description?: string,
    customMessage?: string,
  ) => {
    switch (severity) {
      case SEVERITY_LEVELS_ENUM.SUCCESS:
        notification.success({
          message: customMessage ?? 'Success',
          description: description ?? '',
        });
        break;
      case SEVERITY_LEVELS_ENUM.INFO:
        notification.info({
          message: customMessage ?? 'Info',
          description: description ?? '',
        });
        break;
      case SEVERITY_LEVELS_ENUM.WARNING:
        notification.warning({
          message: customMessage ?? 'Warning',
          description: description ?? '',
        });
        break;
      case SEVERITY_LEVELS_ENUM.ERROR:
        notification.error({
          message: customMessage ?? 'Error',
          description: description ?? '',
        });
        break;

      default:
        break;
    }
  };

  return {
    levels: SEVERITY_LEVELS_ENUM,
    sendNotification,
  };
};
