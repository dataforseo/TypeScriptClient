**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksPageMeta

# Class: BacklinksPageMeta

## Implements

- [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageMeta(data)

> **new BacklinksPageMeta**(`data`?): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

• **data?**: [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Source

main.ts:138310

## Properties

### canonical?

> **`optional`** **canonical**: `string`

canonical page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`canonical`](../interfaces/IBacklinksPageMeta.md#canonical)

#### Source

main.ts:138266

***

### charset?

> **`optional`** **charset**: `string`

character encoding
examples:
utf-8

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`charset`](../interfaces/IBacklinksPageMeta.md#charset)

#### Source

main.ts:138302

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`external_links_count`](../interfaces/IBacklinksPageMeta.md#external_links_count)

#### Source

main.ts:138270

***

### h1?

> **`optional`** **h1**: `string`[]

h1 tag
content of h1 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h1`](../interfaces/IBacklinksPageMeta.md#h1)

#### Source

main.ts:138284

***

### h2?

> **`optional`** **h2**: `string`[]

h2 tag
content of h2 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h2`](../interfaces/IBacklinksPageMeta.md#h2)

#### Source

main.ts:138287

***

### h3?

> **`optional`** **h3**: `string`[]

h3 tag
content of h3 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h3`](../interfaces/IBacklinksPageMeta.md#h3)

#### Source

main.ts:138290

***

### images\_alt?

> **`optional`** **images\_alt**: `string`[]

content of alt tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_alt`](../interfaces/IBacklinksPageMeta.md#images_alt)

#### Source

main.ts:138292

***

### images\_count?

> **`optional`** **images\_count**: `number`

number of images on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_count`](../interfaces/IBacklinksPageMeta.md#images_count)

#### Source

main.ts:138272

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`internal_links_count`](../interfaces/IBacklinksPageMeta.md#internal_links_count)

#### Source

main.ts:138268

***

### language?

> **`optional`** **language**: `string`

page content language
example:
en

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`language`](../interfaces/IBacklinksPageMeta.md#language)

#### Source

main.ts:138298

***

### page\_spam\_score?

> **`optional`** **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`page_spam_score`](../interfaces/IBacklinksPageMeta.md#page_spam_score)

#### Source

main.ts:138277

***

### platform\_type?

> **`optional`** **platform\_type**: `string`[]

type of a platform

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`platform_type`](../interfaces/IBacklinksPageMeta.md#platform_type)

#### Source

main.ts:138304

***

### powered\_by?

> **`optional`** **powered\_by**: `string`[]

CMS details

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`powered_by`](../interfaces/IBacklinksPageMeta.md#powered_by)

#### Source

main.ts:138294

***

### social\_media\_tags?

> **`optional`** **social\_media\_tags**: `Object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`social_media_tags`](../interfaces/IBacklinksPageMeta.md#social_media_tags)

#### Source

main.ts:138281

***

### technologies?

> **`optional`** **technologies**: `Object`

website technologies

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`technologies`](../interfaces/IBacklinksPageMeta.md#technologies)

#### Source

main.ts:138306

***

### title?

> **`optional`** **title**: `string`

page title

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`title`](../interfaces/IBacklinksPageMeta.md#title)

#### Source

main.ts:138264

***

### words\_count?

> **`optional`** **words\_count**: `number`

number of words on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`words_count`](../interfaces/IBacklinksPageMeta.md#words_count)

#### Source

main.ts:138274

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:138319

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:138388

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageMeta`](BacklinksPageMeta.md)

#### Source

main.ts:138381
