[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksPageMeta

# Class: BacklinksPageMeta

## Implements

- [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageMeta()

> **new BacklinksPageMeta**(`data`?): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

• **data?**: [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Defined in

main.ts:145466

## Properties

### canonical?

> `optional` **canonical**: `string`

canonical page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`canonical`](../interfaces/IBacklinksPageMeta.md#canonical)

#### Defined in

main.ts:145422

***

### charset?

> `optional` **charset**: `string`

character encoding
examples:
utf-8

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`charset`](../interfaces/IBacklinksPageMeta.md#charset)

#### Defined in

main.ts:145458

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`external_links_count`](../interfaces/IBacklinksPageMeta.md#external_links_count)

#### Defined in

main.ts:145426

***

### h1?

> `optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h1`](../interfaces/IBacklinksPageMeta.md#h1)

#### Defined in

main.ts:145440

***

### h2?

> `optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h2`](../interfaces/IBacklinksPageMeta.md#h2)

#### Defined in

main.ts:145443

***

### h3?

> `optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h3`](../interfaces/IBacklinksPageMeta.md#h3)

#### Defined in

main.ts:145446

***

### images\_alt?

> `optional` **images\_alt**: `string`[]

content of alt tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_alt`](../interfaces/IBacklinksPageMeta.md#images_alt)

#### Defined in

main.ts:145448

***

### images\_count?

> `optional` **images\_count**: `number`

number of images on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_count`](../interfaces/IBacklinksPageMeta.md#images_count)

#### Defined in

main.ts:145428

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`internal_links_count`](../interfaces/IBacklinksPageMeta.md#internal_links_count)

#### Defined in

main.ts:145424

***

### language?

> `optional` **language**: `string`

page content language
example:
en

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`language`](../interfaces/IBacklinksPageMeta.md#language)

#### Defined in

main.ts:145454

***

### page\_spam\_score?

> `optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`page_spam_score`](../interfaces/IBacklinksPageMeta.md#page_spam_score)

#### Defined in

main.ts:145433

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

type of a platform

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`platform_type`](../interfaces/IBacklinksPageMeta.md#platform_type)

#### Defined in

main.ts:145460

***

### powered\_by?

> `optional` **powered\_by**: `string`[]

CMS details

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`powered_by`](../interfaces/IBacklinksPageMeta.md#powered_by)

#### Defined in

main.ts:145450

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`social_media_tags`](../interfaces/IBacklinksPageMeta.md#social_media_tags)

#### Defined in

main.ts:145437

***

### technologies?

> `optional` **technologies**: `object`

website technologies

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`technologies`](../interfaces/IBacklinksPageMeta.md#technologies)

#### Defined in

main.ts:145462

***

### title?

> `optional` **title**: `string`

page title

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`title`](../interfaces/IBacklinksPageMeta.md#title)

#### Defined in

main.ts:145420

***

### words\_count?

> `optional` **words\_count**: `number`

number of words on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`words_count`](../interfaces/IBacklinksPageMeta.md#words_count)

#### Defined in

main.ts:145430

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:145475

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:145544

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Defined in

main.ts:145537
