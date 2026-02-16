'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorageKeys';
import { ExtendedKyHttpError } from '@/shared/lib/api/common';

import { authDelete } from '../api/auth-delete';

export const useWithdraw = () => {
  const router = useRouter();

  const { mutate: withdraw } = useMutation({
    mutationFn: authDelete.withDraw,
    onSuccess: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.role);
      toast.success('회원탈퇴가 완료되었습니다.');
      router.push('/login');
    },
    onError: (error: ExtendedKyHttpError) => {
      toast.error(error.errorData?.message ?? error.message ?? '알 수 없는 오류');
    },
  });

  return { withdraw };
};
