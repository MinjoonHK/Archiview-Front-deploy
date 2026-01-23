'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Badge } from '@/shared/ui/Badge';
import { ArchiverNavigationFooter } from '@/widgets/navigation/ArchiverNavigationFooter';
import { SearchBar } from '@/shared/ui/SearchBar';
import { CategorySection } from '@/pages/archiver/home/ui/CategorySection';
import { HotPlaceSection } from '@/pages/archiver/home/ui/HotPlaceSection';
import { BelievedEditorSeciton } from '@/pages/archiver/home/ui/BelievedEditorSeciton';

export const ArchiverHomePage = (): React.ReactElement => {
  const [searchedText, setSearchedText] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 overflow-y-auto scroll-none">
        <div className="relative">
          <div className=" w-full bg-[#84C6FF] h-45 rounded-b-4xl px-5 pt-8 pb-13 ">
            <div className="mb-3">
              <Badge variant="contained" label="아카이버" color="primary-60" />
            </div>
            <div className="heading-24-bold">닉네임 닉네임님</div>
            <div className="body-14-regular text-primary-50">소중한 정보를 검색해보세요!</div>
          </div>
          <Image
            src="/images/MainFolderIcon.svg"
            alt="MainFolderImage"
            width={124}
            height={124}
            className="absolute top-8 right-9.75"
          />
          <div className=" absolute left-1/2 -translate-x-1/2 -bottom-5 flex items-center rounded-full bg-transparent shadow-[0_0_11px_0_rgba(144,144,144,0.40)] ">
            <SearchBar
              value={searchedText}
              onChange={(e) => setSearchedText(e)}
              onSubmit={() => {}}
            />
          </div>
        </div>
        <div className="p-5">
          <CategorySection /> <HotPlaceSection /> <BelievedEditorSeciton />
        </div>
      </div>
    </div>
  );
};
