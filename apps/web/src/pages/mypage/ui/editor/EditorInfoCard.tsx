import React from 'react';
import Image from 'next/image';

import { PencilIcon } from '@/shared/ui/icon/place-info/PencilIcon';
import { Chip } from '@/shared/ui/Chip';

interface IEditorInfoCardProps {
  profileImageUrl?: string;
  nickname: string;
  instagramId?: string;
  tags?: string[];
  onEdit?: () => void;
}

export const EditorInfoCard = ({
  profileImageUrl,
  nickname,
  instagramId,
  tags = [],
  onEdit,
}: IEditorInfoCardProps): React.ReactElement => {
  const imageSrc = profileImageUrl?.trim();

  return (
    <div className="flex items-center gap-4 rounded-default bg-primary-30 px-5 py-4">
      {/* 프로필 이미지 */}
      <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-neutral-20">
        {imageSrc ? (
          <Image
            preload={true}
            src={imageSrc}
            alt={`${nickname} 프로필`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-neutral-30" />
        )}
      </div>

      {/* 닉네임 + 인스타 + 태그 */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex flex-col">
          <span className="heading-20-bold text-primary-50">{nickname}</span>
          {instagramId && <span className="body-14-regular text-primary-10">@ {instagramId}</span>}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Chip
                key={`${tag}-${index}`}
                label={tag}
                variant="default"
                className="pointer-events-none border-primary-30 text-primary-30 bg-neutral-10"
              />
            ))}
          </div>
        )}
      </div>

      {/* 편집 버튼 */}
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 self-start p-1 text-neutral-50"
        aria-label="프로필 편집"
      >
        <PencilIcon width={20} height={20} />
      </button>
    </div>
  );
};
