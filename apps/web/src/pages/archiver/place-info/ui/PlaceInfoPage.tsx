import { BackButtonHeader } from '@/widgets/header';
import { EditorNavigationFooter } from '@/widgets/navigation/EditorNavigationFooter';
import { RoundedHeaderSection } from './RoundedHeader';
import { InfoSection } from './InfoSection';
import { CardSection } from './CardSection';

export const PlaceInfoPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-10 shrink-0">
        <BackButtonHeader title="장소 통계 및 정보" />
      </div>
      <div className="flex-1 overflow-auto scroll-none">
        <RoundedHeaderSection />
        <InfoSection />
        <CardSection />
      </div>
      <div className="shrink-0">
        <EditorNavigationFooter />
      </div>
    </div>
  );
};
