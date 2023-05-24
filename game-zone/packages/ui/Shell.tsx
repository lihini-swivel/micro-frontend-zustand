import React, { FC } from 'react'

type ReactText = string | number
type ReactChild = ReactText | JSX.Element

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray
type ReactNode = ReactChild | ReactFragment | boolean | null | undefined

type Props = {
  children: ReactNode
}
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from '@mantine/core'

import { useAppShell } from './index'

// export const Shell2: FC<{title: string}> = ({title})=>{}

export const Shell: React.FunctionComponent<{
  title: string
  children: any
}> = ({ title, children }) => {
  const { user, score, setUser } = useAppShell()
  const theme = useMantineTheme()

  return (
    <AppShell
      padding='md'
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p='xs'
          style={{
            display: 'flex',
            background: theme.colors.blue[8],
          }}
        >
          <Title
            style={{
              color: 'white',
            }}
          >
            {title}
          </Title>
          <Box sx={{ flexGrow: 1 }}></Box>
          {user && (
            <Box sx={{ display: 'flex' }}>
              <Title
                mr='md'
                style={{
                  color: 'white',
                }}
              >
                {user} - {score}
              </Title>
              <Button variant='light' onClick={() => setUser(null)}>
                Logout
              </Button>
            </Box>
          )}
          {!user && (
            <Button variant='light' onClick={() => setUser('Jack')}>
              Login
            </Button>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}
