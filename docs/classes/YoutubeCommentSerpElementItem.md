[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / YoutubeCommentSerpElementItem

# Class: YoutubeCommentSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

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

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:66853

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### author\_name?

> `optional` **author\_name**: `string`

name of the author of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_name`](../interfaces/IYoutubeCommentSerpElementItem.md#author_name)

#### Defined in

main.ts:66832

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_thumbnail`](../interfaces/IYoutubeCommentSerpElementItem.md#author_thumbnail)

#### Defined in

main.ts:66834

***

### author\_url?

> `optional` **author\_url**: `string`

URL of the author’s channel

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`author_url`](../interfaces/IYoutubeCommentSerpElementItem.md#author_url)

#### Defined in

main.ts:66836

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeCommentSerpElementItem.md#likes_count)

#### Defined in

main.ts:66847

***

### publication\_date?

> `optional` **publication\_date**: `string`

displayed publication date

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeCommentSerpElementItem.md#publication_date)

#### Defined in

main.ts:66840

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:66830

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeCommentSerpElementItem.md#rank_group)

#### Defined in

main.ts:66827

***

### reply\_count?

> `optional` **reply\_count**: `number`

number of replies on the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`reply_count`](../interfaces/IYoutubeCommentSerpElementItem.md#reply_count)

#### Defined in

main.ts:66849

***

### text?

> `optional` **text**: `string`

text of the comment

#### Implementation of

[`IYoutubeCommentSerpElementItem`](../interfaces/IYoutubeCommentSerpElementItem.md).[`text`](../interfaces/IYoutubeCommentSerpElementItem.md#text)

#### Defined in

main.ts:66838

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

main.ts:66845

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:66858

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:66885

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:66878
