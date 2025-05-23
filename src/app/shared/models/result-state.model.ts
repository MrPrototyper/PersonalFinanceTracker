/**
 * Helper for ngrx state handling. Usually we are fetching from backend some objects ie. Result.
 * We can have different states related to this fetch action, like loading, loaded, error and so on.
 * To reduce this boilerplate code and always create state properties like 'loading', 'loaded' etc.
 * for every single object that we fetch, we can introduce:
 * 
 *  ResultState
 * 
 * which covers above situations in more clean way.
 */

export interface ResultState {
    result: Result;
    callState: CallState;
}

export const enum LoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
}
export interface ErrorState {
    errorMsg: string;
}

export type Result = null | any[] | object | string | number;
export type CallState = LoadingState | ErrorState;

// Helper methods
export const getError = (resultState: ResultState): string | null => {
    if ((resultState.callState as ErrorState).errorMsg !== undefined) {
        return (resultState.callState as ErrorState).errorMsg;
    }
    return null;
};

export const init = (defaultResult: Result = null): ResultState => {
    return {
        result: defaultResult,
        callState: LoadingState.INIT,
    };
};

export const setLoaded = (result: Result): ResultState => {
    return {
        result,
        callState: LoadingState.LOADED,
    };
};

// just a shortcut instead of calling longer setCallState/2
export const setLoading = (resultState: ResultState): ResultState => {
    return setCallState(resultState, LoadingState.LOADING);
};

// here we imply that on error the result will be recreated to parametrized value
export const setError = (errorMsg: string, result: Result = null): ResultState => {
    return {
        result,
        callState: { errorMsg },
    };
};

export const setCallState = (resultState: ResultState, callState: CallState): ResultState => {
    return {
        ...resultState,
        callState,
    };
};

export const isCallState = (resultState: ResultState, callState: CallState): boolean => {
    return resultState.callState === callState;
};

// Similar to isCallState but here we have a ResultState inside of a record with specific key
export const isRecordCallState = (recordResultState: Record<string | number, ResultState>, recordKey: string | number, callState: CallState, defaultValue = false): boolean => {
    return recordResultState[recordKey] ? isCallState(recordResultState[recordKey], callState) : defaultValue;
};

export const hasRecordAnyCallState = (recordResultState: Record<string | number, ResultState>, callState: CallState): boolean => {
    let anyCallState = false;
    for (const key in recordResultState) {
        if (isRecordCallState(recordResultState, key, callState)) {
            anyCallState = true;
            break;
        };
    }
    return anyCallState;
};

export const getResult = (resultState: ResultState): Result | any[] => {
    return resultState.result;
};

export const getRecordResult = (recordResultState: Record<string | number, ResultState>, recordKey: string | number, defaultValue: any = null): Result => {
    return recordResultState[recordKey] ? getResult(recordResultState[recordKey]) : defaultValue;
};

export const getRecordError = (recordResultState: Record<string | number, ResultState>, recordKey: string | number): Result => {
    return recordResultState[recordKey] ? getError(recordResultState[recordKey]) : null;
};