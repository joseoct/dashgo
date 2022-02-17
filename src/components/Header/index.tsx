import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { Searchbox } from './Searchbox';
import { Logo } from './Logo';

export function Header () {

  const isLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex 
      as="header"
      maxWidth={1480}
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      >

      <Logo />

      <Searchbox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isLg} />
      </Flex>
    </Flex>
  );
}
