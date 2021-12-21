module.exports = {
  checkMessage: function (message) {
    let suspiciousDomains = require("./lib/domain-list");
    const suspiciousDomainsChecker = (arg) =>
      suspiciousDomains.some((suspiciousDomains) =>
        arg.includes(suspiciousDomains)
      );
    const suspiciousDomainsArgs = message.toLowerCase().split(/ +/);
    const suspiciousDomainsMatching = suspiciousDomainsArgs.filter(
      suspiciousDomainsChecker
    );
    console.log(`REQUEST`, message);
    return suspiciousDomainsMatching.length ? true : false;
  },
  list: function () {
    let domains = require("./lib/domain-list");
    return domains;
  },
};
