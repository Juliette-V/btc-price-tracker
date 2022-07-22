import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useUpdateSSR(interval) {
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => router.replace(router.asPath), interval);
    return () => clearInterval(intervalId);
  }, []);
}
