[**Documentation**](../README.md)

***

[Documentation](../README.md) / YoutubeCommentSerpElementItem

# Class: YoutubeCommentSerpElementItem

Defined in: main.ts:73802

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new YoutubeCommentSerpElementItem()

> **new YoutubeCommentSerpElementItem**(`data`?): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

Defined in: main.ts:73825

#### Parameters

##### data?

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:70470

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

***

### author\_name?

> `optional` **author\_name**: `string`

Defined in: main.ts:73804

name of the author of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_name`](../interfaces/IYoutubeCommentSerpElementItem.md#author_name)

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

Defined in: main.ts:73806

the URL of the page where the author’s channel logo is hosted

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_thumbnail`](../interfaces/IYoutubeCommentSerpElementItem.md#author_thumbnail)

***

### author\_url?

> `optional` **author\_url**: `string`

Defined in: main.ts:73808

URL of the author’s channel

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_url`](../interfaces/IYoutubeCommentSerpElementItem.md#author_url)

***

### likes\_count?

> `optional` **likes\_count**: `number`

Defined in: main.ts:73819

number of likes on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeCommentSerpElementItem.md#likes_count)

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:73812

displayed publication date

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeCommentSerpElementItem.md#publication_date)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70468

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70465

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

***

### reply\_count?

> `optional` **reply\_count**: `number`

Defined in: main.ts:73821

number of replies on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`reply_count`](../interfaces/IYoutubeCommentSerpElementItem.md#reply_count)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:73810

text of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`text`](../interfaces/IYoutubeCommentSerpElementItem.md#text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:73817

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`timestamp`](../interfaces/IYoutubeCommentSerpElementItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70461

type of element

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`type`](../interfaces/IYoutubeCommentSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73830

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:73855

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

Defined in: main.ts:73848

#### Parameters

##### data

`any`

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)
