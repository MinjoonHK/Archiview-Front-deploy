export const EDITOR_ENDPOINTS = {
  posts: `posts`,
  publicProfile: (editorId: number) => `${editorId}/profile`,
  me: {
    places: `me/places`,
    profile: `me/profile`,
    insights: {
      places: `me/insights/places`,
      placesDetail: (placeId: string | number) => `me/insights/places/${placeId}`,
      summary: `me/insights/summary`,
    },
    map: {
      places: `me/map/places`,
    },
  },
} as const;
