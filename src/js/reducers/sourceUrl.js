'use strict';

import ActionTypes from '../actions/ActionTypes';

function campaigns(state, action) {
	switch (action.type) {
		case ActionTypes.SET_SOURCE_URL:
		case ActionTypes.EDIT_CAMPAIGN:
			return action.sourceUrl || '/';
	}
	return state || '/';
}

export default campaigns;