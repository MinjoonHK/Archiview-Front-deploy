'use client';

import { Modal } from '@/shared/ui/common/Modal/Modal';
import { Button } from '@/shared/ui/button';
import { XIcon } from '@/shared/ui/icon/XIcon';
import { cn } from '@/shared/lib/cn';

interface IFollowModalProps {
  nickname: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const FollowModal = ({ nickname, isOpen, onClose, onConfirm }: IFollowModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-70">
      <div className="relative rounded-default bg-white">
        <div className="flex justify-end h-5">
          <XIcon onClick={onClose} className="right-4 top-4 w-3" />
        </div>

        <h2 className="body-16-bold text-neutral-90">{nickname}님을 팔로우 하시겠어요?</h2>

        <p className="mt-3 body-14-medium text-neutral-40">
          팔로우 한 에디터는
          <br /> 팔로우 탭에서 확인 가능해요
        </p>

        <div className="mt-6 flex gap-2">
          <Button
            onClick={onClose}
            className={cn(
              'flex-1 h-9 body-14-medium px-0 bg-white border border-neutral-30 text-neutral-30',
            )}
          >
            취소
          </Button>

          <Button onClick={onConfirm} className={cn('flex-1 h-9 body-14-medium px-0')}>
            팔로우하기
          </Button>
        </div>
      </div>
    </Modal>
  );
};
