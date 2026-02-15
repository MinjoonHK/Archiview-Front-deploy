import { useGetEditorTrusted } from '@/entities/archiver/profile/queries/useGetEditorTrusted';
import { IEditor } from '@/entities/archiver/profile/model/archiverProfile.type';

import { EditorRecommendCard } from '@/entities/archiver/profile/ui/EditorRecommendCard';
import { LoadingPage } from '@/shared/ui/common/Loading/LoadingPage';

// TODO : 믿고먹는 에디터 응답값이 이거맞는지..?
export const EditorTrustedSection = (): React.ReactElement => {
  const { data: EditorTrustedData, isLoading, isError } = useGetEditorTrusted({ useMock: false });

  if (isLoading)
    return <LoadingPage text="믿고 먹는 에디터를 불러오는 중입니다." role="ARCHIVER" />;
  if (isError) return <div className="mb-5">에러</div>;

  const EditorTrusted = EditorTrustedData?.data?.editors ?? [];
  console.log(EditorTrustedData);
  if (EditorTrusted.length === 0) {
    return <div>표시할 장소가 없습니다.</div>;
  }

  return (
    <section className="mb-5">
      <div className="flex justify-between mb-4">
        <span className="heading-20-bold">믿고 먹는 에디터</span>
      </div>
      <div className="flex overflow-x-scroll gap-3 scroll-none">
        {EditorTrusted.map((editor: IEditor) => (
          <EditorRecommendCard key={editor.editorId} editor={editor} />
        ))}
      </div>
    </section>
  );
};
