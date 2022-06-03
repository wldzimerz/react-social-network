import React, { useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Tooltip } from 'antd';
import { useColorScheme } from 'src/hooks';
import { COLOR_SCHEME_VARIANTS } from 'src/hooks/useColorScheme';
import { DarkModeIcon, LightModeIcon } from 'src/assets/icons';

export const Header: React.FC = () => {
  const { scheme, setSchemeFromStorage, setSchemeByMediaQuery, setScheme } =
    useColorScheme();

  const isDarkMode = useMemo(
    () => scheme === COLOR_SCHEME_VARIANTS.DARK,
    [scheme],
  );
  // eslint-disable-next-line no-console
  console.log('🚀🚀🚀 ~ scheme', scheme);

  const checkColorScheme = () => {
    if (!setSchemeFromStorage()) {
      setSchemeByMediaQuery();
    }
  };

  const changeTheme = useCallback(
    (theme: COLOR_SCHEME_VARIANTS) => {
      setScheme(theme);
    },
    [scheme],
  );

  useEffect(() => {
    checkColorScheme();
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 border text-base">
      <div>some text</div>
      <div className="flex items-center">
        <div className="flex items-center">
          <Link to="/profile" className="mr-2">
            Username
          </Link>
          <Avatar />
        </div>
        <Tooltip
          title={
            <span>
              Swith to{' '}
              <span className="font-bold">
                {isDarkMode ? 'light ' : 'dark '}
              </span>
              mode
            </span>
          }
          placement="bottomRight"
        >
          <div className="text-main_blue cursor-pointer ml-2">
            {isDarkMode ? (
              <LightModeIcon
                color="currentColor"
                onClick={() => changeTheme(COLOR_SCHEME_VARIANTS.LIGHT)}
              />
            ) : (
              <DarkModeIcon
                color="currentColor"
                onClick={() => changeTheme(COLOR_SCHEME_VARIANTS.DARK)}
              />
            )}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
