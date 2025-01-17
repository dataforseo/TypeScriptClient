[**Documentation**](../README.md)

***

[Documentation](../README.md) / IYoutubeCommentSerpElementItem

# Interface: IYoutubeCommentSerpElementItem

Defined in: main.ts:73874

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### author\_name?

> `optional` **author\_name**: `string`

Defined in: main.ts:73876

name of the author of the comment

***

### author\_thumbnail?

> `optional` **author\_thumbnail**: `string`

Defined in: main.ts:73878

the URL of the page where the author’s channel logo is hosted

***

### author\_url?

> `optional` **author\_url**: `string`

Defined in: main.ts:73880

URL of the author’s channel

***

### likes\_count?

> `optional` **likes\_count**: `number`

Defined in: main.ts:73891

number of likes on the comment

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:73884

displayed publication date

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70531

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70528

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

***

### reply\_count?

> `optional` **reply\_count**: `number`

Defined in: main.ts:73893

number of replies on the comment

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:73882

text of the comment

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:73889

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70524

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)
