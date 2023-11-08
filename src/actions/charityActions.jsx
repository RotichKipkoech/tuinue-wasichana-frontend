// actions/charityActions.js
export const applyCharity = (charityData) => {
  return {
    type: 'APPLY_CHARITY',
    payload: charityData,
  };
};

export const approveCharity = (charityId) => {
  return {
    type: 'APPROVE_CHARITY',
    payload: charityId,
  };
};

export const rejectCharity = (charityId) => {
  return {
    type: 'REJECT_CHARITY',
    payload: charityId,
  };
};

export const deleteCharity = (charityId) => {
  return {
    type: 'DELETE_CHARITY',
    payload: charityId,
  };
};

export const setCharities = (charities) => {
  return {
    type: 'SET_CHARITIES',
    payload: charities,
  };
};