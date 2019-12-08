import hackerNewsApi from "../../services/hackerNewsApi";

const NS = '@hnReader/story';

export const actionTypes = {
    FETCH_STORY_IDS_REQUEST: `${NS}/FETCH_STORY_IDS_REQUEST`,
    FETCH_STORY_IDS_SUCCESS: `${NS}/FETCH_STORY_IDS_SUCCESS`,
    FETCH_STORY_IDS_FAILURE: `${NS}/FETCH_STORY_IDS_FAILURE`,

    FETCH_STORIES_REQUEST: `${NS}/FETCH/_STORIES_REQUEST`,
    FETCH_STORIES_SUCCESS: `${NS}/FETCH/_STORIES_SUCCESS`,
    FETCH_STORIES_FAILURE: `${NS}/FETCH/_STORIES_FAILURE`,
};

const action = (type, payload) => ({type, payload});

const actions = {
    fetchStoriesIds: (payload = {}) => {
        return dispatch => {
            dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload));
            return hackerNewsApi.getTopStoryIDs().then(storyIds => {
                dispatch(action(actionTypes.FETCH_STORY_IDS_SUCCESS, {storyIds}));
                return storyIds;
            }).catch(err => dispatch(action(actionTypes.FETCH_STORY_IDS_FAILURE, err)));
        };
    },
    fetchStories: (payload = {}) => {
        return dispatch => {
            const {storyIds, page} = payload;

            dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST, payload));

            return hackerNewsApi
                .getStoriesByPage(storyIds, page)
                .then(stories => (dispatch(action(actionTypes.FETCH_STORIES_REQUEST, {stories})))
                    .catch(err => dispatch(action(actionTypes.FETCH_STORIES_FAILURE, err))));
        };
    },
};

export default actions;