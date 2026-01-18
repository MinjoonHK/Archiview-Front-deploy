'use client';

import { BoxInput } from '@/shared/ui/common/Input/BoxInput';
import { usePostCode } from '@/shared/hooks/usePostCode';
import { SearchPostCodeModal } from '@/shared/ui/common/Modal/SearchPostCodeModal';

import { useState } from 'react';
import { Chip } from '@/shared/ui/Chip';

const CATEGORIES = ['한식', '중식', '일식', '양식', '카페', '데이트', '이자카야', '기타'];

// TODO : 카테고리 칩 수정
export const CategoryChipGroup = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const toggleCategory = (label: string) => {
    setSelectedList((prev) =>
      prev.includes(label) ? prev.filter((v) => v !== label) : [...prev, label],
    );
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {CATEGORIES.map((label) => (
        <Chip
          key={label}
          label={label}
          selected={selectedList.includes(label)}
          onClick={() => toggleCategory(label)}
          className="h-9 px-4 rounded-xl"
        />
      ))}
    </div>
  );
};

export const RegisterPlaceCard = () => {
  const { isOpen, open, close, result, handleComplete } = usePostCode();

  return (
    <div className="flex flex-col bg-neutral-10 px-5 py-6 rounded-default">
      <div className="flex flex-col gap-5">
        <div>
          <p className="body-14-semibold mb-3">장소 1</p>
          <div className="h-40 bg-neutral-50 rounded-xl"></div>
        </div>
        {/* 주소 입력 */}
        <div>
          <p className="body-14-semibold mb-3">주소</p>
          <div className="flex flex-row gap-3 ">
            <BoxInput state="default" className="flex-1" onClick={open}>
              <input
                readOnly
                value={result?.roadAddress ?? ''}
                placeholder="주소검색 버튼을 눌러주세요"
              />
            </BoxInput>
            <button className="w-16 h-12 text-center body-14-semibold bg-primary-40 rounded-xl text-neutral-10">
              입력
            </button>
          </div>
        </div>
        {/* 장소 소개 */}
        <div>
          <p className="body-14-semibold mb-3">장소 소개</p>
          <div className="flex flex-row gap-3 ">
            <BoxInput state="default" className="flex-1">
              <input placeholder="장소에 대한 한줄 소개를 입력해주세요" />
            </BoxInput>
          </div>
        </div>

        {/* 카테고리 설정 */}
        <div>
          <div className="flex flex-row justify-between">
            <p className="body-14-semibold mb-3">카테고리를 설정해주세요</p>
            <p className="caption-12-medium text-primary-40">*최대 2개</p>
          </div>
          <CategoryChipGroup />
        </div>
      </div>

      <SearchPostCodeModal isOpen={isOpen} onClose={close} onComplete={handleComplete} />
    </div>
  );
};
