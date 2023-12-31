// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for 404 documents */
interface _404DocumentData {
  /**
   * Button Label field in *404*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.button_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismic.RichTextField;
  /**
   * Button Link field in *404*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Descriptions field in *404*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.descriptions[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  descriptions: prismic.GroupField<Simplify<_404DocumentDataDescriptionsItem>>;
  /**
   * Labels field in *404*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.labels[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  labels: prismic.GroupField<Simplify<_404DocumentDataLabelsItem>>;
  /**
   * Slice Zone field in *404*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<_404DocumentDataSlicesSlice>;
  /**
   * Meta Description field in *404*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: 404.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *404*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *404*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: 404.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Item in 404 → Descriptions
 *
 */
export interface _404DocumentDataDescriptionsItem {
  /**
   * Description field in *404 → Descriptions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.descriptions[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in 404 → Labels
 *
 */
export interface _404DocumentDataLabelsItem {
  /**
   * Label field in *404 → Labels*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: 404.labels[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.RichTextField;
}
/**
 * Slice for *404 → Slice Zone*
 *
 */
type _404DocumentDataSlicesSlice = never;
/**
 * 404 document from Prismic
 *
 * - **API ID**: `404`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type _404Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<_404DocumentData>, "404", Lang>;
/** Content for Award documents */
interface AwardDocumentData {
  /**
   * Name field in *Award*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: award.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Description field in *Award*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: award.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Image field in *Award*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: award.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Friction field in *Award*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: award.friction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  friction: prismic.BooleanField;
}
/**
 * Award document from Prismic
 *
 * - **API ID**: `award`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AwardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AwardDocumentData>, "award", Lang>;
/** Content for Contact documents */
interface ContactDocumentData {
  /**
   * Name field in *Contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *Contact*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
  /**
   * Icon field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismic.ImageField<never>;
  /**
   * Color field in *Contact*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  color: prismic.ColorField;
}
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;
/** Content for Country documents */
interface CountryDocumentData {
  /**
   * Name field in *Country*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: country.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismic.KeyTextField;
  /**
   * Image field in *Country*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: country.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Country document from Prismic
 *
 * - **API ID**: `country`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CountryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CountryDocumentData>,
    "country",
    Lang
  >;
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | ContactsSlice
  | AboutSlice
  | WorksSlice
  | HeroSlice
  | AwardsSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Preloader documents */
interface PreloaderDocumentData {
  /**
   * Day field in *Preloader*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.day
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  day: prismic.NumberField;
  /**
   * Month field in *Preloader*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.month
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  month: prismic.NumberField;
  /**
   * Year field in *Preloader*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  year: prismic.NumberField;
  /**
   * City field in *Preloader*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  city: prismic.RichTextField;
  /**
   * Country field in *Preloader*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.country
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  country: prismic.RichTextField;
}
/**
 * Preloader document from Prismic
 *
 * - **API ID**: `preloader`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PreloaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PreloaderDocumentData>,
    "preloader",
    Lang
  >;
/** Content for Project documents */
interface ProjectDocumentData {
  /**
   * Name field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Link field in *Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
  /**
   * Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Mystery field in *Project*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: project.mystery
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  mystery: prismic.BooleanField;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;
export type AllDocumentTypes =
  | _404Document
  | AwardDocument
  | ContactDocument
  | CountryDocument
  | HomepageDocument
  | PreloaderDocument
  | ProjectDocument;
/**
 * Primary content in About → Primary
 *
 */
interface AboutSliceDefaultPrimary {
  /**
   * Headline field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismic.RichTextField;
  /**
   * Description field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Headline 2 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.headline_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline_2: prismic.RichTextField;
  /**
   * Description 2 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description_2: prismic.RichTextField;
  /**
   * Image field in *About → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Headline 3 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.headline_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline_3: prismic.RichTextField;
  /**
   * Description 3 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description_3: prismic.RichTextField;
  /**
   * Description 4 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description_4
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description_4: prismic.RichTextField;
  /**
   * Description 5 field in *About → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.primary.description_5
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description_5: prismic.RichTextField;
}
/**
 * Item in About → Items
 *
 */
export interface AboutSliceDefaultItem {
  /**
   * Countries field in *About → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].countries
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  countries: prismic.ContentRelationshipField<"country">;
}
/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  Simplify<AboutSliceDefaultItem>
>;
/**
 * Slice variation for *About*
 *
 */
type AboutSliceVariation = AboutSliceDefault;
/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: `About`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;
/**
 * Primary content in Awards → Primary
 *
 */
interface AwardsSliceDefaultPrimary {
  /**
   * Headline field in *Awards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: awards.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismic.RichTextField;
  /**
   * Description field in *Awards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: awards.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in Awards → Items
 *
 */
export interface AwardsSliceDefaultItem {
  /**
   * Awards field in *Awards → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: awards.items[].awards
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  awards: prismic.ContentRelationshipField<"award">;
}
/**
 * Default variation for Awards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AwardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AwardsSliceDefaultPrimary>,
  Simplify<AwardsSliceDefaultItem>
>;
/**
 * Slice variation for *Awards*
 *
 */
type AwardsSliceVariation = AwardsSliceDefault;
/**
 * Awards Shared Slice
 *
 * - **API ID**: `awards`
 * - **Description**: `Awards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AwardsSlice = prismic.SharedSlice<"awards", AwardsSliceVariation>;
/**
 * Primary content in Contacts → Primary
 *
 */
interface ContactsSliceDefaultPrimary {
  /**
   * Description field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Copyright field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.copyright
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  copyright: prismic.RichTextField;
}
/**
 * Item in Contacts → Items
 *
 */
export interface ContactsSliceDefaultItem {
  /**
   * Contacts field in *Contacts → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.items[].contacts
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  contacts: prismic.ContentRelationshipField<"contact">;
}
/**
 * Default variation for Contacts Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactsSliceDefaultPrimary>,
  Simplify<ContactsSliceDefaultItem>
>;
/**
 * Slice variation for *Contacts*
 *
 */
type ContactsSliceVariation = ContactsSliceDefault;
/**
 * Contacts Shared Slice
 *
 * - **API ID**: `contacts`
 * - **Description**: `Contacts`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactsSlice = prismic.SharedSlice<
  "contacts",
  ContactsSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Headline field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismic.RichTextField;
  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Role field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.role
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  role: prismic.RichTextField;
  /**
   * Location field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.location
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  location: prismic.RichTextField;
  /**
   * Label field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.RichTextField;
  /**
   * Contact field in *Hero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.contact
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  contact: prismic.ContentRelationshipField<"contact">;
  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_text: prismic.RichTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Works → Primary
 *
 */
interface WorksSliceDefaultPrimary {
  /**
   * Headline field in *Works → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismic.RichTextField;
  /**
   * Description field in *Works → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in Works → Items
 *
 */
export interface WorksSliceDefaultItem {
  /**
   * Projects field in *Works → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].projects
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  projects: prismic.ContentRelationshipField<"project">;
}
/**
 * Default variation for Works Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorksSliceDefaultPrimary>,
  Simplify<WorksSliceDefaultItem>
>;
/**
 * Slice variation for *Works*
 *
 */
type WorksSliceVariation = WorksSliceDefault;
/**
 * Works Shared Slice
 *
 * - **API ID**: `works`
 * - **Description**: `Works`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorksSlice = prismic.SharedSlice<"works", WorksSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      _404DocumentData,
      _404DocumentDataDescriptionsItem,
      _404DocumentDataLabelsItem,
      _404DocumentDataSlicesSlice,
      _404Document,
      AwardDocumentData,
      AwardDocument,
      ContactDocumentData,
      ContactDocument,
      CountryDocumentData,
      CountryDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      PreloaderDocumentData,
      PreloaderDocument,
      ProjectDocumentData,
      ProjectDocument,
      AllDocumentTypes,
      AboutSliceDefaultPrimary,
      AboutSliceDefaultItem,
      AboutSliceDefault,
      AboutSliceVariation,
      AboutSlice,
      AwardsSliceDefaultPrimary,
      AwardsSliceDefaultItem,
      AwardsSliceDefault,
      AwardsSliceVariation,
      AwardsSlice,
      ContactsSliceDefaultPrimary,
      ContactsSliceDefaultItem,
      ContactsSliceDefault,
      ContactsSliceVariation,
      ContactsSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      WorksSliceDefaultPrimary,
      WorksSliceDefaultItem,
      WorksSliceDefault,
      WorksSliceVariation,
      WorksSlice,
    };
  }
}
