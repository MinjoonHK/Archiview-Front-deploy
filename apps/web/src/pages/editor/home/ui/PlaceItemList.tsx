import { Item } from '@/shared/ui/common/Item';
import {
  FolderOutlineIcon,
  EyeIcon,
  PlaneArrowOutlineIcon,
  InstagramOutlineIcon,
  RightArrowIcon,
} from '@/shared/ui/icon';
export const PlaceItemList = () => {
  return (
    <div className='pt-6'>
      <Item thumbnail={<div className="h-18 w-18 rounded-2xl bg-neutral-30" />}>
        <div className="flex flex-col pl-2">
          <p className="body-16-semibold flex flex-row items-center justify-between">
            가게 이름 <RightArrowIcon />
          </p>
          <p className="body-14-semibold text-neutral-50 w-53 truncate pt-0.75">
            가게설명가게설명가게설명가게설명가게설명가게설명가게설명
          </p>
          <div className="flex flex-row gap-2 caption-12-regular text-primary-50 pt-1">
            <p className="flex flex-row items-center gap-1">
              <FolderOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <EyeIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <PlaneArrowOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <InstagramOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
          </div>
        </div>
      </Item>
      <Item thumbnail={<div className="h-18 w-18 rounded-2xl bg-neutral-30" />}>
        <div className="flex flex-col pl-2">
          <p className="body-16-semibold flex flex-row items-center justify-between">
            가게 이름 <RightArrowIcon />
          </p>
          <p className="body-14-semibold text-neutral-50 w-53 truncate pt-0.75">
            가게설명가게설명가게설명가게설명가게설명가게설명가게설명
          </p>
          <div className="flex flex-row gap-2 caption-12-regular text-primary-50 pt-1">
            <p className="flex flex-row items-center gap-1">
              <FolderOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <EyeIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <PlaneArrowOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <InstagramOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
          </div>
        </div>
      </Item> <Item thumbnail={<div className="h-18 w-18 rounded-2xl bg-neutral-30" />}>
        <div className="flex flex-col pl-2">
          <p className="body-16-semibold flex flex-row items-center justify-between">
            가게 이름 <RightArrowIcon />
          </p>
          <p className="body-14-semibold text-neutral-50 w-53 truncate pt-0.75">
            가게설명가게설명가게설명가게설명가게설명가게설명가게설명
          </p>
          <div className="flex flex-row gap-2 caption-12-regular text-primary-50 pt-1">
            <p className="flex flex-row items-center gap-1">
              <FolderOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <EyeIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <PlaneArrowOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
            <p className="flex flex-row items-center gap-1">
              <InstagramOutlineIcon className="w-4 text-primary-30" />
              숫자
            </p>
          </div>
        </div>
      </Item>
    </div>
  );
};
