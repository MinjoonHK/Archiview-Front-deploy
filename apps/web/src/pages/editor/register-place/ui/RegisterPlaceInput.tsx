'use client';

import { XIcon } from '@/shared/ui/icon/XIcon';
import { BoxInput } from '@/shared/ui/common/Input/BoxInput';
import { cn } from '@/shared/lib/cn';

interface IRegisterPlaceInputProps {
  className?: string;
}

export const InstagramUrlInput = ({ className }: IRegisterPlaceInputProps) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-row justify-between">
        <p className="body-14-semibold mb-3">인스타그램 URL</p>
        <p className="caption-12-medium text-primary-40">*필수</p>
      </div>
      <div className="flex flex-row gap-3">
        {/* TODO : 인스타 url 검증 연동 */}
        <BoxInput
          state="success"
          message="인스타그램 프로필 링크를 입력해주세요"
          rightSlot={<XIcon className="w-2.5" />}
          className="flex-1"
        >
          <input placeholder="인스타그램 프로필 링크를 입력해주세요" />
        </BoxInput>
        <button className="w-16 h-12 text-center body-14-semibold bg-primary-40 rounded-xl text-neutral-10">
          입력
        </button>
      </div>
    </div>
  );
};

export const HashTagInput = ({ className }: IRegisterPlaceInputProps) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-row justify-between">
        <p className="body-14-semibold mb-3">게시글의 해시태그를 자유롭게 설정해보세요</p>
        <p className="caption-12-medium text-neutral-40">*선택</p>
      </div>
      <div className="flex flex-row gap-3">
        {/* TODO : 해시태그 칩? 추가 */}
        <BoxInput
          state="success"
          message="인스타그램 프로필 링크를 입력해주세요"
          rightSlot={<XIcon className="w-2.5" />}
          className="flex-1"
        >
          <input placeholder="해시태그를 입력해주세요" />
        </BoxInput>
        <button className="w-16 h-12 text-center body-14-semibold bg-primary-40 rounded-xl text-neutral-10">
          입력
        </button>
      </div>
    </div>
  );
};
