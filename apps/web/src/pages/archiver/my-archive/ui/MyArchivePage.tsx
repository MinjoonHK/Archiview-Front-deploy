import { MyArchivePageInner } from './MyArchivePageInner';

export type CategoryTab =
  | 'ALL'
  | 'NEAR'
  | 'KOREAN'
  | 'WESTERN'
  | 'JAPANESE'
  | 'IZAKAYA'
  | 'CAFE'
  | 'DATE'
  | 'ETC';

interface IPlace {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  savedCount: number;
  viewCount: number;
  category: CategoryTab;
}

export const MyArchiverPage = () => {
  return <MyArchivePageInner />;
};
