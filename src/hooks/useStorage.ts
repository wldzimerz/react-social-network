import { COLOR_SCHEME_VARIANTS } from './useColorScheme';

enum STORAGES {
  AUTH = 'app.in_touch.auth_id',
  COLOR = 'app.in_touch.color_scheme',
}

export const useStorage = () => {
  const writeStorage = {
    auth: (value: string | number) => {
      localStorage.setItem(STORAGES.AUTH, value.toString());
    },
    color: (value: COLOR_SCHEME_VARIANTS) => {
      localStorage.setItem(STORAGES.COLOR, value);
    },
  };

  const readStorage = {
    auth: () => {
      return localStorage.getItem(STORAGES.AUTH);
    },
    color: () => {
      return localStorage.getItem(STORAGES.COLOR);
    },
  };

  const clearStorage = (name: STORAGES) => {
    localStorage.removeItem(name);
  };

  const isAuth = !!readStorage.auth();

  return {
    isAuth,
    writeStorage,
    readStorage,
    clearStorage,
    STORAGES,
  };
};
