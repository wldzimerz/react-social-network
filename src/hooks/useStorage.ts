type STORAGE_ITEM_NAME = 'in_touch_auth_id';

export const useStorage = () => {
  const writeStorage = (name: STORAGE_ITEM_NAME, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
    return true;
  };

  const readStorage = (name: STORAGE_ITEM_NAME) => {
    return JSON.parse(localStorage.getItem(name)!);
  };

  const checkStorage = (name: STORAGE_ITEM_NAME) => {
    const res = localStorage.getItem(name);
    if (res) {
      return true;
    }

    return false;
  };

  const deleteFromStorage = (name: STORAGE_ITEM_NAME) => {
    if (checkStorage(name)) {
      localStorage.removeItem(name);
      return true;
    }

    return false;
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  return {
    writeStorage,
    readStorage,
    checkStorage,
    deleteFromStorage,
    clearStorage,
  };
};
