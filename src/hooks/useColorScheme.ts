import { useState } from 'react';
import { useStorage } from 'src/hooks';

export enum COLOR_SCHEME_VARIANTS {
  DARK = 'dark',
  LIGHT = 'light',
  NO_PREFERENCE = 'no-preference',
}

const isDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
const isLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;

export const useColorScheme = () => {
  const { readStorage, writeStorage } = useStorage();

  const colorChemeFromStorage = readStorage.color() as COLOR_SCHEME_VARIANTS;

  const [scheme, setSchemeState] = useState<COLOR_SCHEME_VARIANTS>(
    colorChemeFromStorage,
  );

  const setScheme = (scheme: COLOR_SCHEME_VARIANTS) => {
    writeStorage.color(scheme);
    setSchemeState(scheme);
  };

  const setSchemeFromStorage = () => {
    if (colorChemeFromStorage === COLOR_SCHEME_VARIANTS.DARK) {
      setScheme(COLOR_SCHEME_VARIANTS.DARK);
      return true;
    } else if (colorChemeFromStorage === COLOR_SCHEME_VARIANTS.LIGHT) {
      setScheme(COLOR_SCHEME_VARIANTS.LIGHT);
      return true;
    }

    return false;
  };

  const setSchemeByMediaQuery = () => {
    if (isDark) {
      return setScheme(COLOR_SCHEME_VARIANTS.DARK);
    } else if (isLight) {
      return setScheme(COLOR_SCHEME_VARIANTS.LIGHT);
    }

    return setScheme(COLOR_SCHEME_VARIANTS.LIGHT);
  };

  return {
    scheme,
    setScheme,
    setSchemeByMediaQuery,
    setSchemeFromStorage,
  };
};
