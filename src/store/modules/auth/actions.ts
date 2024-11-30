export function signInRequest(email: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess() {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}