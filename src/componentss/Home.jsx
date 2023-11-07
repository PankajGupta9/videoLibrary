import { Box } from '@chakra-ui/layout';
import { Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../asset/1.jpg';
import img2 from '../asset/2.jpg';
import img3 from '../asset/3.jpg';
import img4 from '../asset/4.jpg';
import img5 from '../asset/5.png';

const headingOptions = {
  pos:"absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",

}

const Home = () => {
  return (
<Box>

<MyCarousel />

<Container maxW={'container.xl'} minH={'100vh'} p='16'>
<Heading 
textTransform={'uppercase'} 
py='2' 
w={'fit-content'} 
borderBottom={'2px solid'}
m='auto'
>
Services
</Heading>

<Stack
h='full'
p={'4'}
alignItems={'center'}
direction={['column', 'row']}
>
<Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

<Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
  assumenda voluptatem. Sapiente dignissimos eligendi eaque hic esse
  corporis, recusandae alias exercitationem eum reprehenderit 
  incidunt ipsum quisquam numquam, dolore est odio autem dolorum 
  omnis adipisci. Aliquam eaque quos in accusamus! Maxime et, at 
  quos, corporis iusto odio ullam, exercitationem modi dolorem quidem 
  debitis neque fugiat vitae delectus explicabo libero repellendus? Enim!
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, 
  delectus porro harum obcaecati qui tempore expedita at voluptas quia. 
  Beatae aliquid, optio ipsa iure explicabo perferendis at cumque 
  molestiae culpa!
</Text>
</Stack>
</Container>

</Box>  );

};

const MyCarousel = ()=>(
  <Carousel 
  autoPlay
  infiniteLoop 
  interval={1000} 
  showStatus={false} 
  showThumbs={false} 
  // showArrows={false}
  >

<Box w='full' h={'100vh'}>
<Image src={img1}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
Watch the future
</Heading>
</Box>

<Box>
<Image src={img2}/>
<Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
Future is Gaming
</Heading>
</Box>

<Box>
<Image src={img3}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
 Gaming on Console 
</Heading>
</Box>

<Box>
<Image src={img4}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
Night life is cool</Heading>
</Box>

  </Carousel>
)

export default Home;
