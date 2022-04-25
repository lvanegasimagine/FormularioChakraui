import {
  Container,
  HStack,
  VStack,
  StackDivider,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select
} from "@chakra-ui/react";
export default function Stack() {
  return (
    <Container maxW="container.sm" pt={50}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="auto">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Box h="auto">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Box h="auto">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
      </VStack>
      <HStack spacing="24px" align="stretch" pt={5}>
        <Box w="auto" h="auto">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Box w="auto" h="auto">
          <FormControl>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Select id="country" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Box>
        <Box w="auto" h="auto">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
      </HStack>
    </Container>
  );
}
