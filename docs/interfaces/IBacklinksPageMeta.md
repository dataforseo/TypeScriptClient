[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksPageMeta

# Interface: IBacklinksPageMeta

## Implemented by

- [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [canonical](IBacklinksPageMeta.md#canonical)
- [charset](IBacklinksPageMeta.md#charset)
- [external\_links\_count](IBacklinksPageMeta.md#external_links_count)
- [h1](IBacklinksPageMeta.md#h1)
- [h2](IBacklinksPageMeta.md#h2)
- [h3](IBacklinksPageMeta.md#h3)
- [images\_alt](IBacklinksPageMeta.md#images_alt)
- [images\_count](IBacklinksPageMeta.md#images_count)
- [internal\_links\_count](IBacklinksPageMeta.md#internal_links_count)
- [language](IBacklinksPageMeta.md#language)
- [page\_spam\_score](IBacklinksPageMeta.md#page_spam_score)
- [platform\_type](IBacklinksPageMeta.md#platform_type)
- [powered\_by](IBacklinksPageMeta.md#powered_by)
- [social\_media\_tags](IBacklinksPageMeta.md#social_media_tags)
- [technologies](IBacklinksPageMeta.md#technologies)
- [title](IBacklinksPageMeta.md#title)
- [words\_count](IBacklinksPageMeta.md#words_count)

## Properties

### canonical

• `Optional` **canonical**: `string`

canonical page

#### Defined in

main.ts:138297

___

### charset

• `Optional` **charset**: `string`

character encoding
examples:
utf-8

#### Defined in

main.ts:138333

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page

#### Defined in

main.ts:138301

___

### h1

• `Optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Defined in

main.ts:138315

___

### h2

• `Optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Defined in

main.ts:138318

___

### h3

• `Optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Defined in

main.ts:138321

___

### images\_alt

• `Optional` **images\_alt**: `string`[]

content of alt tags

#### Defined in

main.ts:138323

___

### images\_count

• `Optional` **images\_count**: `number`

number of images on the page

#### Defined in

main.ts:138303

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Defined in

main.ts:138299

___

### language

• `Optional` **language**: `string`

page content language
example:
en

#### Defined in

main.ts:138329

___

### page\_spam\_score

• `Optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:138308

___

### platform\_type

• `Optional` **platform\_type**: `string`[]

type of a platform

#### Defined in

main.ts:138335

___

### powered\_by

• `Optional` **powered\_by**: `string`[]

CMS details

#### Defined in

main.ts:138325

___

### social\_media\_tags

• `Optional` **social\_media\_tags**: `Object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:138312

___

### technologies

• `Optional` **technologies**: `Object`

website technologies

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:138337

___

### title

• `Optional` **title**: `string`

page title

#### Defined in

main.ts:138295

___

### words\_count

• `Optional` **words\_count**: `number`

number of words on the page

#### Defined in

main.ts:138305
