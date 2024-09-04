[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / YoutubeCommentSerpElementItem

# Class: YoutubeCommentSerpElementItem

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YoutubeCommentSerpElementItem()

> **new YoutubeCommentSerpElementItem**(`data`?): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Parameters

• **data?**: [`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md)

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructors)

#### Defined in

main.ts:65570

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

#### Defined in

main.ts:62255

***

### author\_name?

> `optional` **author\_name**: `string`

name of the author of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_name`](../interfaces/IYoutubeCommentSerpElementItem.md#author_name)

#### Defined in

main.ts:65549

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_thumbnail`](../interfaces/IYoutubeCommentSerpElementItem.md#author_thumbnail)

#### Defined in

main.ts:65551

***

### author\_url?

> `optional` **author\_url**: `string`

URL of the author’s channel

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_url`](../interfaces/IYoutubeCommentSerpElementItem.md#author_url)

#### Defined in

main.ts:65553

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeCommentSerpElementItem.md#likes_count)

#### Defined in

main.ts:65564

***

### publication\_date?

> `optional` **publication\_date**: `string`

displayed publication date

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeCommentSerpElementItem.md#publication_date)

#### Defined in

main.ts:65557

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:62253

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:62250

***

### reply\_count?

> `optional` **reply\_count**: `number`

number of replies on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`reply_count`](../interfaces/IYoutubeCommentSerpElementItem.md#reply_count)

#### Defined in

main.ts:65566

***

### text?

> `optional` **text**: `string`

text of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`text`](../interfaces/IYoutubeCommentSerpElementItem.md#text)

#### Defined in

main.ts:65555

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`timestamp`](../interfaces/IYoutubeCommentSerpElementItem.md#timestamp)

#### Defined in

main.ts:65562

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`type`](../interfaces/IYoutubeCommentSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:62246

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

#### Defined in

main.ts:65575

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

#### Defined in

main.ts:65600

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)

#### Defined in

main.ts:65593
