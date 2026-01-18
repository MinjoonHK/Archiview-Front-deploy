'use client';

import DaumPostcode, { type Address } from 'react-daum-postcode';

import { XIcon } from '../../icon/XIcon';

import { Modal } from './Modal';

interface ISearchPostCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (address: Address) => void;
}

export const SearchPostCodeModal = ({ isOpen, onClose, onComplete }: ISearchPostCodeModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="body-16-bold">주소검색</h2>

          <button type="button" onClick={onClose} className="p-1 text-neutral-70" aria-label="닫기">
            <XIcon className="w-3 h-3" />
          </button>
        </div>

        <DaumPostcode onComplete={onComplete} style={{ height: '420px' }} />
      </div>
    </Modal>
  );
};
