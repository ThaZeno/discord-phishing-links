module.exports = {
  checkMessage: function (message) {
    let domains = require("./lib/domain-list");
    const susDomainsChecker = (arg) =>
      domains.some((domains) => arg.includes(domains));
    const susDomainsArgs = message.toLowerCase().split(/ +/);
    const susDomainsMatching = susDomainsArgs.filter(susDomainsChecker);
    console.log(`REQUEST`, message);
    return susDomainsMatching.length ? true : false;
  },
  list: function () {
    let domains = require("./lib/domain-list");
    return domains;
  },
};
