const accountDashboardPO = {
  avatarSection: '.avatar-section',
  avatarImage: '.avatar img',
  updateImage: '.update-image',
  // TODO: Cancel/Save buttons for uploading images
  sidebarSection: '.sidebar-info',
  sidebarPublishProfile: '.skyward-sidebar-item:nth-of-type(1)',
  sidebarPreviewProfile: '.skyward-sidebar-item:nth-of-type(2)',
  sidebarOrgName: '.skyward-sidebar-item:nth-of-type(3)',
  sidebarOwnerName: '.skyward-sidebar-item:nth-of-type(4)',
  sidebarOrgEmail: '.skyward-sidebar-item:nth-of-type(5)',
  sidebarPhoneNumber: '.skyward-sidebar-item:nth-of-type(6)',
  sidebarCountry: '.skyward-sidebar-item:nth-of-type(7)',
  sidebarAddress: '.skyward-sidebar-item:nth-of-type(8)',
  sidebarMemberSince: '.skyward-sidebar-item:nth-of-type(9)',
  sidebarServiceArea: '.skyward-sidebar-item:nth-of-type(10)',
  sidebarInsuranceCoverage: '.skyward-sidebar-item:nth-of-type(11)',
  sidebarServices: '.skyward-sidebar-item:nth-of-type(12)',
  sidebarQualifications: '.skyward-sidebar-item:nth-of-type(13)',
  sidebarCustomFields: '.skyward-sidebar-item:nth-of-type(14)',
  sidebarAbout: '.skyward-sidebar-item:nth-of-type(15)',
  storeageLimitsContainer: '.storage-limits',
  skyLimitsContainer: '.sky-limits:nth-child(2)',
  flightButtonContainer: '.plan-flight-btn-set',
  logOperationButton: 'a.log-operation-btn',
  skywardBadgeContainer: '.sky-org-badge',
  skywardBadgeIcon: 'svg.badge-icon',
  loggedOperations: '.skyward-overview a:nth-of-type(1)',
  loggedFlights: '.skyward-overview a:nth-of-type(2)',
  flightAreas: '.skyward-overview a:nth-of-type(3)',
  totalPersonnel: '.skyward-overview a:nth-of-type(4)',
  totalAircraft: '.skyward-overview a:nth-of-type(5)',
  // TODO: Add more specific items like icons and such
  skywardFlightContentModule: '.skyward-flights.content-module',
  documentListContainter: '.document-list-container',
  documentTabs: '.library-tabs',
  documentUploadContainer: '.upload-container'
}

export default accountDashboardPO;