'use client';

import { useState } from 'react';

import {
  NickNameInput,
  IntroductionInput,
  InstagramInput,
  InstagramUrlInput,
  HashTagField,
} from './RegisterEditorInput';

export const RegisterEditorPage = () => {
  const [nickname, setNickname] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [instagramId, setInstagramId] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);

  return (
    <div className="px-5">
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex flex-row justify-between mb-3">
            <p className="body-14-semibold">닉네임</p>
            <p className="caption-12-medium text-primary-40">*필수</p>
          </div>
          <NickNameInput
            value={nickname}
            onChange={setNickname}
            onCheckDuplicate={() => console.log('중복확인')}
            disabledCheck={!nickname || nickname.length > 6}
          />
        </div>

        <div>
          <div className="flex flex-row justify-between mb-3">
            <p className="body-14-semibold">한줄소개</p>
          </div>
          <IntroductionInput value={introduction} onChange={setIntroduction} />
        </div>

        <div>
          <div className="flex flex-row justify-between mb-3">
            <p className="body-14-semibold">인스타그램 아이디</p>
            <p className="caption-12-medium text-primary-40">*필수</p>
          </div>
          <InstagramInput
            value={instagramId}
            onChange={setInstagramId}
            onCheckDuplicate={() => console.log('중복확인')}
          />
        </div>

        <div>
          <div className="flex flex-row justify-between mb-3">
            <p className="body-14-semibold">인스타그램 URL</p>
            <p className="caption-12-medium text-primary-40">*필수</p>
          </div>
          <InstagramUrlInput
            value={instagramUrl}
            onChange={setInstagramUrl}
            onCheckDuplicate={() => console.log('중복확인')}
          />
        </div>

        <div>
          <div className="flex flex-row justify-between mb-3">
            <p className="body-14-semibold">나를 표현하는 해시태그를 자유롭게 설정해보세요!</p>
            <p className="caption-12-medium text-primary-40">*최대 2개</p>
          </div>
          <HashTagField value={hashtags} onChange={setHashtags} max={2} />
        </div>
        
      </div>
    </div>
  );
};
