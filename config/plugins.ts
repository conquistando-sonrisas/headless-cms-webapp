export default ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 20 * 1024 * 1024, // 256mb in bytes
      provider: 'local',
      providerOptions: {
        sizeLimit: 20_000_000,
        localServer: {
          maxage: 300_000
        },
      },
    }
  }
});
