const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});

export function addContactsHomePage(homePage, contacts) {
  if (!homePage || !contacts) return;

  const socialLinks = contacts.socialLink || [];

  homePage.contacts = homePage.contacts || {};
  homePage.donation = homePage.donation || {};
  homePage.bePartner = homePage.bePartner || {};
  homePage.footer = homePage.footer || {};

  homePage.contacts.mailingLinks = socialLinks
    .filter((link) => link.type === "mailing")
    .map((link) => pick(link, ["url", "iconDark"]));
  homePage.contacts.groupLinks = socialLinks
    .filter((link) => link.type === "group")
    .map((link) => pick(link, ["url", "iconDark"]));
  homePage.contacts.phone = contacts.phone;

  homePage.donation.donationPhone = contacts.donationPhone;
  homePage.donation.donationDetails = contacts.donationDetails;

  homePage.bePartner.phone = contacts.phone;

  homePage.footer.socialLinks = socialLinks.map((link) =>
    pick(link, ["url", "iconLight"])
  );
  homePage.footer.phone = contacts.phone;
  homePage.footer.phoneOwner = contacts.phoneOwner;
}
