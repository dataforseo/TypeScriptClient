[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleReviewsSearchBusinessDataSerpElementItem

# Interface: IGoogleReviewsSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images submitted by the reviewer

#### Defined in

main.ts:222264

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Defined in

main.ts:222236

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Defined in

main.ts:222250

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Defined in

main.ts:222220

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Defined in

main.ts:222247

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Defined in

main.ts:222253

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:222258

***

### photos\_count?

> `optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Defined in

main.ts:222234

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:222213

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Defined in

main.ts:222244

***

### profile\_name?

> `optional` **profile\_name**: `string`

profile name of the reviewer

#### Defined in

main.ts:222238

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Defined in

main.ts:222240

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22295

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22293

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:222230

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Defined in

main.ts:222267

***

### review\_id?

> `optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Defined in

main.ts:222262

***

### review\_text?

> `optional` **review\_text**: `string`

the content of the review

#### Defined in

main.ts:222217

***

### review\_url?

> `optional` **review\_url**: `string`

the URL of the review

#### Defined in

main.ts:222242

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Defined in

main.ts:222232

***

### time\_ago?

> `optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Defined in

main.ts:222223

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:222228

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:22290

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the review

#### Defined in

main.ts:222215
