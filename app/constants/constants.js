export const FETCH_LIST 		= 'FETCH_LIST';
export const RETURN_LIST 		= 'RETURN_LIST';
export const FETCH_CLIENT		= 'FETCH_CLIENT';
export const RETURN_CLIENT	= 'RETURN_CLIENT';
export const UPDATE_CLIENT	= 'UPDATE_CLIENT';
export const UPDATE_LIST		= 'UPDATE_LIST'
export const ADD_CLIENT			= 'ADD_CLIENT'
export const REMOVE_CLIENT	= 'REMOVE_CLIENT'
export const TAX_MENU				= ["Taxable", "Tax-free", "Tax-deffered"]
export const HORIZON_MENU		= ["Short", "Intermediate", "Long"]
export const BIAS_MENU			= ["Growth", "Aggregation", "Distribution"]
// NOTE: could break up client struct
export const CLIENT_STRUCT	= {
/* Personal Information */
  personal: {
    name: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
  },
/* Financial Information */
  financial: {
    annualIncome: '',
    totalAssets: '',
    liquidAssets: '',
    investmentAssets: '',
    investmentExperience: '',
    investmentObjectives: '',
    timeHorizon: '',
    taxConsids: '',
    liquidConsids: '',
    regulatoryIssues: '',
    unique: '',
    returnObjective: '',
    riskAbility: '',
    riskWillingness: '',
    riskOverall: ''
  },
/* Account Information */
  accounts : [{
    accNum: 0,
    accName: '',
    startBal: '',
    startDate: '',
    tax: '',
    horizon: '',
    bias: '',
    performanceHist : [{
      date: '',
      tax: '',
      horizon: '',
      bias: '',
      beginBal: '',
      endBal: '',
      netReturn: ''
    }]
  }]
}
