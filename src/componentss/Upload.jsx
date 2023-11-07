import React from 'react'
import { Container, Stack, VStack, Text, Heading, Button, HStack,Input } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
const Upload = () => {
  return (
    <div>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
       <AiOutlineCloudUpload size={'10vmax'}/>

       <form action="">

        <HStack>
            <Input required type={'file'} css={{
                '&::file-selector-button': {
                    border: 'none',
                    width: 'calc(100% + 36px)',
                    height: '100%',
                    marginLeft: '-18px',
                    color: 'purple',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                }
            }}></Input>
            <Button colorScheme={'purple'} type={'submit'}>
            Upload
            </Button>
        </HStack>
       </form>
      </VStack>
      </Container>
    </div>
  )
}

export default Upload
