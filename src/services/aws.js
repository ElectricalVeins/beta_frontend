import { Amplify } from 'aws-amplify';

export const configureAwsCognito = () => {
    Amplify.configure({
        Auth: {
            Cognito: {
                userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
                userPoolClientId: process.env.REACT_APP_COGNITO_USER_POOL_CLIENT_ID,
                allowGuestAccess: false,
            }
        }
    });
}
