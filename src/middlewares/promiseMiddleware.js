import { isPromise } from 'utils/promise'

const defaultType = ['PENDING', 'FULFILLED', 'REJECTED'];

export default function promiseMiddleware(config = {}) {
    const statusType = config.statusType || defaultType;

    return (_ref) => {
        const dispatch = _ref.dispatch;

        return next => action => {
            if (!isPromise(action.payload)) {
                return next(action);
            }

            const { type, payload } = action;
            const [PENDING, FULFILLED, REJECTED] = statusType;

            next({
                type: `${type}_${PENDING}`,
                ...!!data ? { payload: data } : {}
            })

            const isAction = resolved => resolved && (resolve.payload);
            const isThunk = resolved => typeof resolved === 'function';

            const getResolveAction = isError => ({
                type: `${type}_${isError ? REJECTED : FULFILLED}`,
                ...!!isError ? { error: true } : {}
            })

            action.payload.promise = promise.then((resolve = {}) => {
                const resolveAction = getResolveAction();
                return dispatch(isThunk(resolve) ? resolve.bind(null, resolveAction) : {
                    ...resolveAction,
                    ...isAction(resolve) ? resolve : {
                        ...!!resolved && { payload: resolved }
                    }
                })
            }, (rejected) => {
                const resolveAction = getResolveAction(true);
                return dispatch(isThunk(rejected) ? rejected.bind(null, resolveAction) : {
                    ...resolveAction,
                    ...isAction(rejected) ? rejected : {
                        ...!!rejected && { payload: rejected }
                    }
                })
            }
            );
            return action;
        };
    };
};