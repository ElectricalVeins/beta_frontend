import { Text, useAuthenticator } from '@aws-amplify/ui-react';

export const Home = () => {
    const auth = useAuthenticator();

    return (
        <div>
            <Text>
                {auth?.user ? `You are logged in as ${auth.user.username}` : 'Please, login to your account'}
            </Text>
        </div>
    );
}
