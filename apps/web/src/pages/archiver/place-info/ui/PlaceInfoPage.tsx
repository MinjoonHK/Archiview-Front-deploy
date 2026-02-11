'use client';

import { BackButtonHeader } from '@/widgets/header';
import { useGetPlaceDetail } from '@/entities/archiver/place/queries/useGetPlaceDetail';

import { RoundedHeaderSection } from './RoundedHeader';
import { InfoSection } from './InfoSection';
import { CardSection } from './CardSection';

export const PlaceInfoPage = ({ placeId }: { placeId: number }) => {
  const {
    data: placeDetailData,
    isLoading,
    error,
  } = useGetPlaceDetail({
    placeId,
    useMock: true,
  });
  console.log(placeDetailData);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-auto scroll-none">
        <BackButtonHeader title="" />
        <RoundedHeaderSection place={placeDetailData?.data?.place} />
        <InfoSection
          place={placeDetailData?.data?.place}
          recordNumber={placeDetailData?.data?.postPlaces.length}
        />
        <CardSection />
      </div>
      <div className="shrink-0"></div>
    </div>
  );
};
