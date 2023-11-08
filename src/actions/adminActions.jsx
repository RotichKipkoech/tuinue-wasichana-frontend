// actions/adminActions.js
export const reviewCharityApplications = (charityApplications) => {
  return {
    type: 'REVIEW_CHARITY_APPLICATIONS',
    payload: charityApplications,
  };
};

export const approveCharityApplication = (charityId) => {
  return {
    type: 'APPROVE_CHARITY_APPLICATION',
    payload: charityId,
  };
};

export const rejectCharityApplication = (charityId) => {
  return {
    type: 'REJECT_CHARITY_APPLICATION',
    payload: charityId,
  };
};

export const deleteCharityAdmin = (charityId) => {
  return {
    type: 'DELETE_CHARITY_ADMIN',
    payload: charityId,
  };
};
