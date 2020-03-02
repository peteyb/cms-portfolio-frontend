
import _ from 'lodash'

export const createAsyncMutation = (type) => ({
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: _.camelCase(`${type}_PENDING`),
	stateKey: _.camelCase(`${type}_DATA`),
  errorKey: _.camelCase(`${type}_FAILURE`),
})