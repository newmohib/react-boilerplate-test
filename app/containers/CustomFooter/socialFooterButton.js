import React, { Component } from 'react';
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
} from 'react-share';
import './socialButton.css';
class SocialFooterButton extends Component {
  state = {};

  render() {
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url="https://www.facebook.com/"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url="https://twitter.com/"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <TelegramShareButton
            url="https://telegram.org/"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <WhatsappShareButton
            url="https://www.whatsapp.com/"
            quote="title"
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <LinkedinShareButton
            url="https://www.linkedin.com/"
            quote="title"
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <TumblrShareButton
            url="https://www.tumblr.com/"
            quote="title"
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <TumblrIcon size={32} round />
          </TumblrShareButton>
          <LivejournalShareButton
            url="https://www.livejournal.com/"
            quote="title"
            description=""
            className="Demo__some-network__share-button"
          />

          <MailruShareButton
            url=""
            quote="title"
            className="Demo__some-network__share-button"
          >
            <MailruIcon size={32} round />
          </MailruShareButton>

          <EmailShareButton
            url="https://accounts.google.com/"
            quote="title"
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>

          <WorkplaceShareButton
            url="https://www.facebook.com/workplace"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>

          <PocketShareButton
            url="https://getpocket.com/"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <PocketIcon size={32} round />
          </PocketShareButton>

          <InstapaperShareButton
            url="https://www.instapaper.com/"
            quote="title"
            className="Demo__some-network__share-button"
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>
      </div>
    );
  }
}

export default SocialFooterButton;
