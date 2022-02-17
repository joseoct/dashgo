import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination () {
  return (
    <HStack
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        
        <PaginationButton number={1} isCurrent/>
        <PaginationButton number={2} />
        <PaginationButton number={3} />
        <PaginationButton number={4} />
        <PaginationButton number={5} />
        
      </HStack>
    </HStack>
  );
}
