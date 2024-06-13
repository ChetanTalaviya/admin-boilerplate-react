export const route = {
  login: '/',
  forgotPassword: '/forgot-password',
  resetPassword: (token) => `/reset-password/${token}`,
  changePassword: '/change-password',
  editProfile: '/profile',

  dashboard: '/dashboard',
  // pageNotFound: '/404',

    }
