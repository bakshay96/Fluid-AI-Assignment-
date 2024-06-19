import { Box } from '@chakra-ui/react'

export const CardSkeletone=()=> {
  

  return (
    <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>{data.title}</Heading>
      </Skeleton>
    </Box>
  )
}