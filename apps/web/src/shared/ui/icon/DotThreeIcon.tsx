'use client';

import * as React from 'react';

import { BottomSheetModal } from '../common/BottomSheet/BottomSheetModal';

import { XIcon } from './XIcon';
import { RightArrowIcon } from './RightArrowIcon';
import { Button } from '../button';

type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

import { cn } from '@/shared/lib/cn';
import { Modal } from '../common/Modal/Modal';

interface IReportConfirmModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isConfirmLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ReportConfirmModal = ({
  isOpen,
  title = '이 게시글 / 에디터를 신고할까요?',
  description = '신고하기를 클릭하여\n신고 사유를 작성해주세요.',
  cancelText = '취소',
  confirmText = '신고하기',
  onCancel,
  onConfirm,
  isConfirmLoading = false,
  disabled = false,
  className,
}: IReportConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      closeOnOverlayClick
      className={cn(
        // 사진처럼 둥글고, 폭 고정 + 가운데 정렬
        'w-[320px] rounded-2xl px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]',
        className,
      )}
    >
      <div className="text-center">
        <h2 className="text-[16px] font-semibold text-neutral-900">{title}</h2>

        <p className="mt-2 whitespace-pre-line text-[13px] leading-5 text-neutral-500">
          {description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={disabled || isConfirmLoading}
            className={cn(
              'h-10 rounded-xl bg-neutral-100 text-[14px] font-medium text-neutral-500',
              'hover:bg-neutral-200 active:bg-neutral-200',
              'disabled:cursor-not-allowed disabled:opacity-60',
            )}
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={disabled || isConfirmLoading}
            className={cn(
              'h-10 rounded-xl bg-blue-500 text-[14px] font-semibold text-white',
              'hover:brightness-95 active:brightness-90',
              'disabled:cursor-not-allowed disabled:opacity-60',
            )}
          >
            {isConfirmLoading ? '처리 중…' : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function DotThreeIcon({ title, ...props }: IconProps) {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="p-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role={title ? 'img' : 'presentation'}
          aria-label={title}
          aria-hidden={title ? undefined : true}
          {...props}
        >
          {title ? <title>{title}</title> : null}

          <path
            d="M11.9961 12H12.0051"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.9998 12H18.0088"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.99981 12H6.00879"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <BottomSheetModal open={open} onOpenChange={setOpen} height={360} className="z-100">
        <div className="p-5 text-left">
          <div className="flex justify-end">
            <XIcon onClick={() => setOpen(false)} className="w-6" />
          </div>
          <p className="heading-20-semibold">신고 / 차단하기</p>
          <p className="body-14-medium text-neutral-40 mt-3">
            규정 위반 게시글 (이미지, 무관한 내용 등)은 신고하기를,
            <br />
            에디터의 게시글을 더 이상 보고 싶지 않다면 차단하기를
            <br />
            선택해주세요.
          </p>
          <button>
            <p
              className="flex flex-row items-center gap-3 body-16-semibold mt-5"
              onClick={() => {
                setOpen(false);
                setModalOpen(true);
              }}
            >
              신고하기 <RightArrowIcon />
            </p>
          </button>
          <p
            className="flex flex-row items-center gap-3 body-16-semibold mt-3 mb-5"
            onClick={() => {
              setOpen(false);
              setModalOpen(true);
            }}
          >
            차단하기 <RightArrowIcon />
          </p>
          <Button onClick={() => setOpen(false)} className="w-full">
            닫기
          </Button>
        </div>
      </BottomSheetModal>

      <ReportConfirmModal
        isOpen={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
        onConfirm={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}
