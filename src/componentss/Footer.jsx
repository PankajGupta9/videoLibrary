import { Box, VStack, Stack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import { AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>

<Stack direction={['column', 'row']}>
 <VStack alignItems={'stretch'} w={'full'} px={'4'}>
    <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
    Subscribe to get updates
    </Heading>
    <HStack borderBottom={'2px solid'} py='2'>
       
       <Input 
       placeholder='Enter Email here....' 
       border={'none'} 
       borderradius={'none'} 
       outline={'none'} 
       focusBorderColor='none'

       />
        <Button
        p={'0'}
        colorScheme={'purple'}
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}
        >
            <AiOutlineSend size={20}/>
        </Button>
    </HStack>
 </VStack>

 <VStack w={'full'}
 borderLeft={['none', '1px solid white']}
 borderRight={['none', '1px solid white']}
 >
 <Heading texttransform={'uppercase'} textAlign={'center'}>
    VIDEO HUB
 </Heading>
 <Text>All rights reserved</Text>
 </VStack>

 <VStack w={'full'}>

 <Heading size={'md'} textTransform={'uppercase'}>
 Social Media
 </Heading>
 <Button varient={'link'} colorScheme={'white'}>
 <a target={'blank'} href="https://www.youtube.com/watch?v=Irw8llgSC3s&list=RDIrw8llgSC3s&start_radio=1">YouTube</a>
 </Button>

 <Button varient={'link'} colorScheme={'white'}>
 <a target={'blank'} href="https://www.instagram.com/__pankaj100/">Instagram</a>
 </Button>

 <Button varient={'link'} colorScheme={'white'}>
 <a target={'blank'} href="https://www.linkedin.com/in/pankaj-gupta-1025b01ab/">Linkdin</a>
 </Button>

 </VStack>
</Stack>
    </Box>
  )
}

export default Footer
