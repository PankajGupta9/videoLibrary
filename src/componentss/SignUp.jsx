import React from 'react'
import { Container, Stack, VStack, Text, Heading, Button, HStack,Input, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form action="">
    <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full','96']}
        m={'auto'}
        my={'16'}
        >
        <Heading>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
        <Input 
        placeholder={'Name'} 
        type={'text'} 
        required 
        focusBorderColor={'purple.500'}>
        </Input>
        
        <Input 
        placeholder={'Email'} 
        type={'email'} 
        required 
        focusBorderColor={'purple.500'}>
        </Input>
        
        <Input 
        placeholder={'password'} 
        type={'password'} 
        required 
        focusBorderColor={'purple.500'}>
        </Input>
   
   
   <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

   <Text textAlign={'right'}>
   Already SignUp?{' '} 
   <Button variant={'link'} colorScheme={'purple'}>
    <Link to={'/Login'}>Login</Link>
   </Button>
   </Text>
    </VStack>
</form>
      </Container>
    </div>
  )
}

export default SignUp;
