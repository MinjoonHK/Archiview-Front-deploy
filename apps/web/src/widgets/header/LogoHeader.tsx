import { ArchiviewLogoIcon } from '@/shared/ui/icon';
import { HeaderIcons } from './HeaderIcons';
import { Header } from './Header';

export const LogoHeader = (): React.ReactElement => {
  return <Header left={<ArchiviewLogoIcon />} right={<HeaderIcons />} />;
};
