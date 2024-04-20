import { Button, Badge, Flex, useAuthenticator, View, Divider, Authenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Modal } from 'antd';

import { notificateError, notificateInfo } from '../services';

async function checkIfUserLoggedIn(auth) {
  try {
    const { user } = auth;
    notificateInfo(user.username)
  } catch (error) {
    notificateError(error)
  }
}

export const Header = () => {
  const auth = useAuthenticator();
  const [open, setOpen] = useState(false);

  const isAuthenticated = auth.authStatus === 'authenticated';
  const isAuthenticating = auth.authStatus === 'configuring';

  useEffect(() => setOpen(false), [isAuthenticated])

  return (
    <>
      <Flex justifyContent='space-between'>
        <Badge variation="info" size="large">beta</Badge>
        <Badge variation="success" size="large">{auth.authStatus}</Badge>
        <View>
          <Button onClick={() => checkIfUserLoggedIn(auth)}>Get current session</Button>
          {isAuthenticated
            ? <Button onClick={() => auth.signOut()}>Sign out</Button>
            : <Button onClick={() => setOpen(true)}>Sign in</Button>}
          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            confirmLoading={isAuthenticating}
            closable={false}
            footer={false}
          >
            <Authenticator
              signUpAttributes={['nickname']}
              formFields={{
                signIn: {
                  username: {
                    placeholder: 'Enter your Email',
                    isRequired: true,
                    label: 'Email:'
                  },
                },
                signUp: {
                  username: {
                    placeholder: 'Enter your Email',
                    isRequired: true,
                    label: 'Email:'
                  },
                }
              }}
            />
          </Modal>
        </View>
      </Flex>
      <Divider />
    </>
  );
};
