'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch } from '@/state/hook';
import { setId, setName } from '@/state/slicers/user';
import { getUserInfo } from '@zizibot/rest-client/internal/user-rest';

export default function SessionListener() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.debug('router', pathname);

    getUserInfo().then(({ result }) => {
      console.debug('userinfo', result);

      dispatch(setName(result.name));
      dispatch(setId(result.userId));
    });
  }, [pathname]);

  return ('');
}