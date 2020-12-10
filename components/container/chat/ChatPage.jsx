import React, { memo } from 'react';

import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const messages = [
  {
    message:
      'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: false,
    date: new Date().toLocaleTimeString(),
    sender: 'Ahmed Elywa',
    avatar: 'https://i.gifer.com/no.gif',
  },
  {
    message:
      'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: true,
    date: new Date().toLocaleTimeString(),
    sender: 'Ahmed Elywa',
    avatar: 'https://i.gifer.com/no.gif',
  },
  {
    message: 'Hello, how are you?',
    reply: false,
    date: new Date().toLocaleTimeString(),
    sender: 'Ahmed Elywa',
    avatar: '',
  },
  {
    message: 'Hey looks at that pic I just found!',
    reply: false,
    date: new Date().toLocaleTimeString(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        type: 'image/jpeg',
      },
    ],
    sender: 'Ahmed Elywa',
    avatar: '',
  },
  {
    message: 'What do you mean by that?',
    reply: false,
    date: new Date().toLocaleTimeString(),
    type: 'quote',
    quote:
      'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    sender: 'Ahmed Elywa',
    avatar: '',
  },
  {
    message: 'Attached is an archive I mentioned',
    reply: true,
    date: new Date().toLocaleTimeString(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        icon: 'icon ion-ios-document',
      },
    ],
    sender: 'Ahmed Elywa',
    avatar: '',
  },
  {
    message: 'Meet me there',
    reply: false,
    date: new Date().toLocaleTimeString(),
    type: 'map',
    latitude: 30.789901,
    longitude: 30.999093,
    sender: 'Ahmed Elywa',
    avatar: '',
  },
];

const ChatPage = memo(props => {
  const {
    /* slides */
    SLIDES,
    activeIndex,
    setAnimating,
    next,
    previous,
    goToIndex,
  } = props;

  const slides = SLIDES.carousels.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-fluid" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <h2>Interactive Chat</h2>
      <Card className="w-25 box-shadow">
        <CardBody>
          <Form action="/page/profile" method="POST">
            <fieldset>
              <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
                <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
              </legend>
              <FormGroup>
                <Label for="exampleInputEmail3">Email address</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword3">Password</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                />
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck3"
                />
                <Label check for="exampleCheck3">
                  Check me out
                </Label>
              </FormGroup>
            </fieldset>
            <Button color="primary" block size="lg" className="mt-2">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
});

export default ChatPage;
