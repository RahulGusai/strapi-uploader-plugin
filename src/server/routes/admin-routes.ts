export default [
  {
    method: 'GET',
    path: '/api-video-asset',
    handler: 'admin.findAll',
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/api-video-asset/:videoId',
    handler: 'admin.getVideoDetail',
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/api-video-asset',
    handler: 'admin.create',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/api-video-asset/:id/:videoId',
    handler: 'admin.update',
    config: {
      policies: [],
    },
  },
  {
    method: 'DELETE',
    path: '/api-video-asset/:id/:videoId',
    handler: 'admin.delete',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/api-video-asset/create',
    handler: 'admin.createVideoId',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/api-video-asset/create/asset',
    handler: 'admin.createVideoAsset',
    config: {
      policies: [],
    },
  },
];
