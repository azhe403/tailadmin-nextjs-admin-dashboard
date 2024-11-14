'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getUserInfo } from 'zizibot-rest-service/src/internal/user-rest';
import { useAppDispatch } from '@/state/hook';
import { setId, setName } from '@/state/slicers/user';

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