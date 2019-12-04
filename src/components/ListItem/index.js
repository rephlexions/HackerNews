import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'nofollow noreferrer no opener';

const ListItem = () => {
    return(
        <Item>
            <ExternalLink href="https://reddit.com" rel={LINK_REL} target="_blank">
                <Title>
                    Reddit <Host>(reddit.com)</Host>
                </Title>
            </ExternalLink>
            <Description>
                9000 points by{' '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    Test User
                </CommentLink>{' '}
                1 Hour Ago {' | '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    42 comments
                </CommentLink>
            </Description>
        </Item>
    );
};

export default ListItem;