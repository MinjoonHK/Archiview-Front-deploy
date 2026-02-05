import { HotPlaceCard } from './HotPlaceCard';

export const HotPlaceSection = (): React.ReactElement => {
  return (
    <section className="mb-5">
      <div className="flex justify-between mb-4">
        <span className="heading-20-bold">요즘 HOT한 장소</span>
      </div>
      <div className="flex overflow-x-scroll gap-3 scroll-none">
        <HotPlaceCard
          imageUrl="/images/TestImage.png"
          title="지도상의 장소 이름"
          address="주소주소"
        />
        <HotPlaceCard
          imageUrl="/images/TestImage.png"
          title="지도상의 장소 이름"
          address="주소주소"
        />
        <HotPlaceCard
          imageUrl="/images/TestImage.png"
          title="지도상의 장소 이름"
          address="주소주소"
        />
        <HotPlaceCard
          imageUrl="/images/TestImage.png"
          title="지도상의 장소 이름"
          address="주소주소"
        />
      </div>
    </section>
  );
};
