[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IYoutubeCommentSerpElementItem

# Interface: IYoutubeCommentSerpElementItem

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author\_name?

> `optional` **author\_name**: `string`

name of the author of the comment

#### Defined in

main.ts:65654

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Defined in

main.ts:65656

***

### author\_url?

> `optional` **author\_url**: `string`

URL of the author’s channel

#### Defined in

main.ts:65658

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the comment

#### Defined in

main.ts:65669

***

### publication\_date?

> `optional` **publication\_date**: `string`

displayed publication date

#### Defined in

main.ts:65662

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:62349

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:62346

***

### reply\_count?

> `optional` **reply\_count**: `number`

number of replies on the comment

#### Defined in

main.ts:65671

***

### text?

> `optional` **text**: `string`

text of the comment

#### Defined in

main.ts:65660

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Defined in

main.ts:65667

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:62342
