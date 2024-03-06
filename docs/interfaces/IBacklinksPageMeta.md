[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksPageMeta

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

[main.ts:132906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132906)

___


### charset

• `Optional` **charset**: `string`

character encoding
examples:
utf-8

#### Defined in

[main.ts:132942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132942)

___


### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page

#### Defined in

[main.ts:132910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132910)

___


### h1

• `Optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Defined in

[main.ts:132924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132924)

___


### h2

• `Optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Defined in

[main.ts:132927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132927)

___


### h3

• `Optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Defined in

[main.ts:132930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132930)

___


### images\_alt

• `Optional` **images\_alt**: `string`[]

content of alt tags

#### Defined in

[main.ts:132932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132932)

___


### images\_count

• `Optional` **images\_count**: `number`

number of images on the page

#### Defined in

[main.ts:132912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132912)

___


### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Defined in

[main.ts:132908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132908)

___


### language

• `Optional` **language**: `string`

page content language
example:
en

#### Defined in

[main.ts:132938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132938)

___


### page\_spam\_score

• `Optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:132917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132917)

___


### platform\_type

• `Optional` **platform\_type**: `string`[]

type of a platform

#### Defined in

[main.ts:132944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132944)

___


### powered\_by

• `Optional` **powered\_by**: `string`[]

CMS details

#### Defined in

[main.ts:132934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132934)

___


### social\_media\_tags

• `Optional` **social\_media\_tags**: `Object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:132921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132921)

___


### technologies

• `Optional` **technologies**: `Object`

website technologies

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:132946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132946)

___


### title

• `Optional` **title**: `string`

page title

#### Defined in

[main.ts:132904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132904)

___


### words\_count

• `Optional` **words\_count**: `number`

number of words on the page

#### Defined in

[main.ts:132914](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132914)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")