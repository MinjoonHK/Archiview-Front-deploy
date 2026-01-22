import { EditorTopBanner } from './EditorTopBanner';
import { EditorInsight } from './EditorInsight';

export const HomePage = () => {
  return (
    <div className="w-full">
      <EditorTopBanner />
      <EditorInsight />
    </div>
  );
};
