// actions/donorActions.js
export const registerDonor = (donorData) => {
  return {
    type: 'REGISTER_DONOR',
    payload: donorData,
  };
};

export const loginDonor = (loginData) => {
  return {
    type: 'LOGIN_DONOR',
    payload: loginData,
  };
};

export const logoutDonor = () => {
  return {
    type: 'LOGOUT_DONOR',
  };
};

export const setAnonymousDonor = (isAnonymous) => {
  return {
    type: 'SET_ANONYMOUS_DONOR',
    payload: isAnonymous,
  };
};

export const donate = (donationData) => {
  return {
    type: 'DONATE',
    payload: donationData,
  };
};