[Documentation](../README.md) / [Exports](../modules.md) / BacklinksPageMeta

# Class: BacklinksPageMeta

## Implements

- [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksPageMeta.md#constructor)

### Properties

- [canonical](BacklinksPageMeta.md#canonical)
- [charset](BacklinksPageMeta.md#charset)
- [external\_links\_count](BacklinksPageMeta.md#external_links_count)
- [h1](BacklinksPageMeta.md#h1)
- [h2](BacklinksPageMeta.md#h2)
- [h3](BacklinksPageMeta.md#h3)
- [images\_alt](BacklinksPageMeta.md#images_alt)
- [images\_count](BacklinksPageMeta.md#images_count)
- [internal\_links\_count](BacklinksPageMeta.md#internal_links_count)
- [language](BacklinksPageMeta.md#language)
- [page\_spam\_score](BacklinksPageMeta.md#page_spam_score)
- [platform\_type](BacklinksPageMeta.md#platform_type)
- [powered\_by](BacklinksPageMeta.md#powered_by)
- [social\_media\_tags](BacklinksPageMeta.md#social_media_tags)
- [technologies](BacklinksPageMeta.md#technologies)
- [title](BacklinksPageMeta.md#title)
- [words\_count](BacklinksPageMeta.md#words_count)

### Methods

- [init](BacklinksPageMeta.md#init)
- [toJSON](BacklinksPageMeta.md#tojson)
- [fromJS](BacklinksPageMeta.md#fromjs)

## Constructors

### constructor

• **new BacklinksPageMeta**(`data?`): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md) |

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Defined in

main.ts:132905

## Properties

### canonical

• `Optional` **canonical**: `string`

canonical page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[canonical](../interfaces/IBacklinksPageMeta.md#canonical)

#### Defined in

main.ts:132861

___

### charset

• `Optional` **charset**: `string`

character encoding
examples:
utf-8

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[charset](../interfaces/IBacklinksPageMeta.md#charset)

#### Defined in

main.ts:132897

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[external_links_count](../interfaces/IBacklinksPageMeta.md#external_links_count)

#### Defined in

main.ts:132865

___

### h1

• `Optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[h1](../interfaces/IBacklinksPageMeta.md#h1)

#### Defined in

main.ts:132879

___

### h2

• `Optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[h2](../interfaces/IBacklinksPageMeta.md#h2)

#### Defined in

main.ts:132882

___

### h3

• `Optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[h3](../interfaces/IBacklinksPageMeta.md#h3)

#### Defined in

main.ts:132885

___

### images\_alt

• `Optional` **images\_alt**: `string`[]

content of alt tags

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[images_alt](../interfaces/IBacklinksPageMeta.md#images_alt)

#### Defined in

main.ts:132887

___

### images\_count

• `Optional` **images\_count**: `number`

number of images on the page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[images_count](../interfaces/IBacklinksPageMeta.md#images_count)

#### Defined in

main.ts:132867

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[internal_links_count](../interfaces/IBacklinksPageMeta.md#internal_links_count)

#### Defined in

main.ts:132863

___

### language

• `Optional` **language**: `string`

page content language
example:
en

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[language](../interfaces/IBacklinksPageMeta.md#language)

#### Defined in

main.ts:132893

___

### page\_spam\_score

• `Optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[page_spam_score](../interfaces/IBacklinksPageMeta.md#page_spam_score)

#### Defined in

main.ts:132872

___

### platform\_type

• `Optional` **platform\_type**: `string`[]

type of a platform

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[platform_type](../interfaces/IBacklinksPageMeta.md#platform_type)

#### Defined in

main.ts:132899

___

### powered\_by

• `Optional` **powered\_by**: `string`[]

CMS details

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[powered_by](../interfaces/IBacklinksPageMeta.md#powered_by)

#### Defined in

main.ts:132889

___

### social\_media\_tags

• `Optional` **social\_media\_tags**: `Object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[social_media_tags](../interfaces/IBacklinksPageMeta.md#social_media_tags)

#### Defined in

main.ts:132876

___

### technologies

• `Optional` **technologies**: `Object`

website technologies

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[technologies](../interfaces/IBacklinksPageMeta.md#technologies)

#### Defined in

main.ts:132901

___

### title

• `Optional` **title**: `string`

page title

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[title](../interfaces/IBacklinksPageMeta.md#title)

#### Defined in

main.ts:132859

___

### words\_count

• `Optional` **words\_count**: `number`

number of words on the page

#### Implementation of

[IBacklinksPageMeta](../interfaces/IBacklinksPageMeta.md).[words_count](../interfaces/IBacklinksPageMeta.md#words_count)

#### Defined in

main.ts:132869

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:132914

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:132983

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Defined in

main.ts:132976
