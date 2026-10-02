// Site-wide settings. Replace the placeholders here before going live.
const gstin = '33AANCT2916L1Z1'

export const SITE = {
  name: 'Techademy Technology and Training Company',
  // registered company name, used in the footer copyright line
  legalName: 'Techademy Training Services Pvt. Ltd.',
  email: 'director@techademytraining.com',
  address: 'Tiruchengode, Namakkal, Tamil Nadu, 637211',
  addressShort: 'Tiruchengode, Namakkal, Tamil Nadu, 637211',
  hours: 'Monday – Saturday, 9:00 AM – 7:00 PM',
  gstin,
  // Contact page "Address" card, one entry per line
  contactAddressLines: [
    'TECHADEMY TRAINING SERVICES',
    `GST No.: ${gstin}`,
    'Tiruchengode, Namakkal District,',
    'Tamil Nadu – 637211, India.',
  ],
}
