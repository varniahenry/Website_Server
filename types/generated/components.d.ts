import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksEvent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_events';
  info: {
    displayName: 'Event';
  };
  attributes: {
    address: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    endTime: Schema.Attribute.Time;
    province: Schema.Attribute.String;
    startTime: Schema.Attribute.Time;
    venue: Schema.Attribute.String;
  };
}

export interface BlocksEventBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_event_blocks';
  info: {
    displayName: 'Event Block';
  };
  attributes: {
    events: Schema.Attribute.Component<'blocks.event', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['Top', 'Bottom']> &
      Schema.Attribute.DefaultTo<'Top'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    darken: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    needGap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    paragraph: Schema.Attribute.Text;
    subheading: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    isBlackBackgroud: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isFaded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksSectionWithParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_with_paragraphs';
  info: {
    displayName: 'Section With Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    isBlackBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Stay In The Know - Subscribe Today for News and Updates'>;
    headline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get On The List'>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your email address'>;
  };
}

export interface ElementsIconLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_links';
  info: {
    displayName: 'IconLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copy: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.event': BlocksEvent;
      'blocks.event-block': BlocksEventBlock;
      'blocks.gallery': BlocksGallery;
      'blocks.heading': BlocksHeading;
      'blocks.hero': BlocksHero;
      'blocks.image': BlocksImage;
      'blocks.paragraph': BlocksParagraph;
      'blocks.section-with-paragraph': BlocksSectionWithParagraph;
      'blocks.subscribe': BlocksSubscribe;
      'elements.icon-link': ElementsIconLink;
      'elements.image': ElementsImage;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
