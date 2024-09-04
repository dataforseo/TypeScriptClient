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

main.ts:142332

## Properties

### canonical?

> `optional` **canonical**: `string`

canonical page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`canonical`](../interfaces/IBacklinksPageMeta.md#canonical)

#### Defined in

main.ts:142288

***

### charset?

> `optional` **charset**: `string`

character encoding
examples:
utf-8

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`charset`](../interfaces/IBacklinksPageMeta.md#charset)

#### Defined in

main.ts:142324

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`external_links_count`](../interfaces/IBacklinksPageMeta.md#external_links_count)

#### Defined in

main.ts:142292

***

### h1?

> `optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h1`](../interfaces/IBacklinksPageMeta.md#h1)

#### Defined in

main.ts:142306

***

### h2?

> `optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h2`](../interfaces/IBacklinksPageMeta.md#h2)

#### Defined in

main.ts:142309

***

### h3?

> `optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h3`](../interfaces/IBacklinksPageMeta.md#h3)

#### Defined in

main.ts:142312

***

### images\_alt?

> `optional` **images\_alt**: `string`[]

content of alt tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_alt`](../interfaces/IBacklinksPageMeta.md#images_alt)

#### Defined in

main.ts:142314

***

### images\_count?

> `optional` **images\_count**: `number`

number of images on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_count`](../interfaces/IBacklinksPageMeta.md#images_count)

#### Defined in

main.ts:142294

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`internal_links_count`](../interfaces/IBacklinksPageMeta.md#internal_links_count)

#### Defined in

main.ts:142290

***

### language?

> `optional` **language**: `string`

page content language
example:
en

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`language`](../interfaces/IBacklinksPageMeta.md#language)

#### Defined in

main.ts:142320

***

### page\_spam\_score?

> `optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`page_spam_score`](../interfaces/IBacklinksPageMeta.md#page_spam_score)

#### Defined in

main.ts:142299

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

type of a platform

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`platform_type`](../interfaces/IBacklinksPageMeta.md#platform_type)

#### Defined in

main.ts:142326

***

### powered\_by?

> `optional` **powered\_by**: `string`[]

CMS details

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`powered_by`](../interfaces/IBacklinksPageMeta.md#powered_by)

#### Defined in

main.ts:142316

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

main.ts:142303

***

### technologies?

> `optional` **technologies**: `object`

website technologies

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`technologies`](../interfaces/IBacklinksPageMeta.md#technologies)

#### Defined in

main.ts:142328

***

### title?

> `optional` **title**: `string`

page title

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`title`](../interfaces/IBacklinksPageMeta.md#title)

#### Defined in

main.ts:142286

***

### words\_count?

> `optional` **words\_count**: `number`

number of words on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`words_count`](../interfaces/IBacklinksPageMeta.md#words_count)

#### Defined in

main.ts:142296

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:142341

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:142410

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Defined in

main.ts:142403
