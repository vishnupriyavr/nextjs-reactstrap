import React, { memo } from 'react';
import {
  Chat,
  ChatForm,
  ChatMessages,
  MessageProps,
  AttachedFile,
} from '@paljs/ui/Chat';
//import { Card, CardBody } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

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
          <Row>
            <Col
              breakPoint={{ xs: 12, md: 6 }}
              style={{ marginBottom: '1rem' }}
            >
              <Chat title="OAH Technology">
                <ChatMessages messages={messages} mapKey="API_KEY" />
                <ChatForm
                  onSend={v => onSendHandle(v)}
                  dropFiles
                  filesIcon="document"
                />
              </Chat>
            </Col>
            <Col breakPoint={{ xs: 12, md: 6 }}>
              <Card>
                <header>Main features</header>
                <CardBody>
                  <ul>
                    <li>
                      different message types support (text, image, file, file
                      group, map, etc)
                    </li>
                    <li>drag &amp; drop for images and files with preview</li>
                    <li>different UI styles</li>
                  </ul>
                  <Row />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
});

export default ChatPage;
