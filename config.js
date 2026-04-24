const config = {
  challenge: process.env.AUTH_ENABLED === "true",
  users: {
    tide: process.env.AUTH_PASSWORD || "tide",
  },
};

export default config;
