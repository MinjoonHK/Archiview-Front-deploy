import { PlaceOptionTabs } from './PlaceOptionTabs';
import { PlaceItemList } from './PlaceItemList';

export const PopularPlaceSection = () => {
  return (
    <>
      <PlaceOptionTabs value="ALL" />
      <PlaceItemList />
    </>
  );
};
