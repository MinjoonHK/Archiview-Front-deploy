'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type UserRole = 'ARCHIVER' | 'EDITOR';

const STORAGE_KEY = 'user_role';

const ROLE_HOME: Record<UserRole, string> = {
  ARCHIVER: '/archiver/home',
  EDITOR: '/editor/home',
};

function readRole(): UserRole {
  if (typeof window === 'undefined') return 'ARCHIVER';
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'EDITOR' ? 'EDITOR' : 'ARCHIVER';
}

function writeRole(role: UserRole) {
  window.localStorage.setItem(STORAGE_KEY, role);
}

export const MyPage = (): React.ReactElement => {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>('ARCHIVER');

  useEffect(() => {
    setRole(readRole());
  }, []);

  const onToggleRole = () => {
    const next: UserRole = role === 'ARCHIVER' ? 'EDITOR' : 'ARCHIVER';
    setRole(next);
    writeRole(next);

    router.replace(ROLE_HOME[next]);
  };

  return (
    <div className="p-5">
      <div className="body-16-semibold">MyPage</div>

      <div className="mt-4 flex items-center justify-between">
        <span className="body-14-regular text-neutral-60">현재 역할</span>
        <span className="body-14-semibold">{role}</span>
      </div>

      <button
        type="button"
        onClick={onToggleRole}
        className="mt-6 w-full rounded-default bg-neutral-90 py-3 text-white"
      >
        역할 토글 (ARCHIVER ↔ EDITOR)
      </button>

      <p className="mt-3 text-xs text-neutral-50">
        개발용: localStorage에 role 저장 후 role 홈으로 이동합니다.
      </p>
    </div>
  );
};
