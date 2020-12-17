import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,

 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você Retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong> 
                        Rocketseat
                    </strong>

                    <span>
                        @rockeatseat
                    </span>

                    <Dot />
                    <time>15 de Dez</time>
                </Header>

                <Description>
                    Foguetes não tem ré 🚀 
                </Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        14
                    </Status>
                    <Status>
                        <RetweetIcon />
                        14
                    </Status>
                    <Status>
                        <LikeIcon />
                        846
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>

  );
}

export default Tweet;