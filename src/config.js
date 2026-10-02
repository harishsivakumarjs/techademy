// Site-wide settings. Replace the placeholders here before going live.
const gstin = '33AANCT2916L1Z1'
// registered company name: footer copyright line and Contact page address
const legalName = 'Techademy Training Services Pvt. Ltd.'

export const SITE = {
  name: 'Techademy Technology and Training Company',
  legalName,
  email: 'director@techademytraining.com',
  address: 'Tiruchengode, Namakkal, Tamil Nadu, 637211',
  addressShort: 'Tiruchengode, Namakkal, Tamil Nadu, 637211',
  hours: 'Monday – Saturday, 9:00 AM – 7:00 PM',
  gstin,
  // Contact page "Address" card, one entry per line
  contactAddressLines: [
    legalName,
    `GST No.: ${gstin}`,
    'Tiruchengode, Namakkal District,',
    'Tamil Nadu – 637211, India.',
  ],
}
