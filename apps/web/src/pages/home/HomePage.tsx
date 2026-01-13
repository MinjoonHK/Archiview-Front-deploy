'use client';

import { useState } from 'react';

import { TabBar } from '@/shared/components/TabBar';
import { PlaceListCard } from '@/shared/components/PlaceListCard';
import { EditorResultCard } from '@/shared/components/EditorResultCard';
import { Button } from '@/shared/components/Button';
import { GoogleIcon, KakaoIcon, XIcon } from '@/shared/components/icon';
import { Chip } from '@/shared/components/Chip';

type SearchScope = 'all' | 'info' | 'editor';

export const HomePage = (): React.ReactElement => {
  const [scope, setScope] = useState<SearchScope>('all');
  const [input, setInput] = useState('');

  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col w-full">
        {/* <SearchBar placeholder="ㅎㅇ" value={input} onChange={setInput} /> */}
        <PlaceListCard image="" title="제목" description="내용" uploadedAt="1/2 업로드" />
        <EditorResultCard
          title="title"
          image=""
          description="내용"
          uploadedAt="1/2 업로드"
          views={10}
          saves={5}
        />

        <UnderLineInput
          state="success"
          message="message"
          rightSlot={
            <>
              <XIcon />
              <XIcon />
            </>
          }
        >
          <input placeholder="입력해주세요" />
        </UnderLineInput>

        <BoxInput
          state="success"
          message="입력을 완료했어요."
          rightSlot={<button className="bg-amber-400">완료</button>}
        >
          <input placeholder="텍스트를 입력하세요" />
        </BoxInput>

        <TabBar
          items={[
            { value: 'all', label: '전체' },
            { value: 'info', label: '정보' },
            // { value: 'editor', label: '에디터' },
          ]}
          value={scope}
          onChange={setScope}
        />
        <div className="flex items-center justify-center gap-4">
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            disabled
          </Button>
        </div>
        <Button variant="outlined" fullwidth>
          Outlined Fullwidth
        </Button>
        <div className="w-full px-8">
          <Button
            variant="login"
            fullwidth
            startIcon={<KakaoIcon className="fill-white" />}
            className="bg-[#FEE500]"
          >
            카카오톡으로 로그인
          </Button>
          <Button variant="login" startIcon={<GoogleIcon />} fullwidth className="bg-[#EAEBEC]">
            구글로 로그인
          </Button>
          <Chip hashTag={false} chipType="category" label="텍스트" variant="outlined" />
          <Chip
            hashTag={true}
            chipType="category"
            color="primary"
            label="텍스트"
            variant="outlined"
            endIcon={<XIcon />}
          />
          <Chip hashTag={false} chipType="keyword" label="텍스트" variant="outlined" />
          <Chip
            hashTag={true}
            color="secondary"
            chipType="keyword"
            label="텍스트"
            variant="outlined"
            endIcon={<XIcon />}
          />

          <Chip
            hashTag={false}
            color="default"
            chipType="keyword"
            label="텍스트"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
