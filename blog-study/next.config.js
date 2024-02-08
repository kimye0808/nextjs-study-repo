const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "kimye0808",
        mongodb_password: "1234",
        mongodb_clustername: "cluster0",
      },
    };
    return {
      env: {
        mongodb_username: "kimye0808",
        mongodb_password: "1234",
        mongodb_clustername: "cluster0",
      },
    };
  }
};
