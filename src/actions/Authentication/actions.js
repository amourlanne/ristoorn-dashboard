import { history } from "../../helpers/BrowserHistory";
import {authenticationConstants} from "../../constants/Authentication";
import {authenticationService} from "../../services/Authentication";

export const authenticationActions = {
    login,
    logout,
};

function login(email, password) {
    return dispatch => {
        dispatch(request({email}));

        authenticationService.login(email,password)
            .then(
                response => {
                    dispatch(success(response.token));
                    // store jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', response.token);
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) {
        return {type: authenticationConstants.LOGIN_REQUEST, user}
    }

    function success(token) {
        return {type: authenticationConstants.LOGIN_SUCCESS, token}
    }

    function failure(error) {
        return {type: authenticationConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    authenticationService.logout()
    return { type: authenticationConstants.LOGOUT_REQUEST };
}
