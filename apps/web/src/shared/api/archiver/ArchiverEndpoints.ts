const BASE = '/api/v1/archivers';

export const ARCHIVER_ENDPOINTS = {
  me: {
    profile: `${BASE}/me/profile`,
  },
  publicProfile: (archiverId: string | number) => `${BASE}/${archiverId}/profile`,
} as const;
