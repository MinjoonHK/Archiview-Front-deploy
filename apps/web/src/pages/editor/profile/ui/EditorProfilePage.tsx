'use client';

import { useEditorGetMyProfile } from '@/entities/editor/profile/queries/useEditorGetMyProfile';
import { EditorProfilePageInner } from './EditorProfilePageInner';
import { useGetMyPlaceList } from '@/entities/editor/place/queries/useGetMyPlaceList';

export const EditorProfilePage = () => {
  const { data: editorUserData } = useEditorGetMyProfile();
  const { data: placeListData } = useGetMyPlaceList();
  console.log(placeListData);

  const profile = {
    nickname: editorUserData?.data?.nickname ?? '',
    instagramId: editorUserData?.data?.instagramId ?? '',
    introduction: editorUserData?.data?.introduction ?? '',
    hashtags: editorUserData?.data?.hashtags ?? [],
    profileImageUrl: editorUserData?.data?.profileImageUrl ?? '',
  };

  const places = placeListData?.data?.places ?? [];

  return <EditorProfilePageInner places={places} profile={profile} />;
};
