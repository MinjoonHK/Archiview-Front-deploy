import { Loading } from './Loading';

interface ILoadingPageProps {
  text: string;
  role: 'EDITOR' | 'ARCHIVER';
}
export const LoadingPage = ({ text, role }: ILoadingPageProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loading text={text} role={role} />
    </div>
  );
};
