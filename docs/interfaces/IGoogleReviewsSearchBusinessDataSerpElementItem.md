**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleReviewsSearchBusinessDataSerpElementItem

# Interface: IGoogleReviewsSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images submitted by the reviewer

#### Source

main.ts:211515

***

### local\_guide?

> **`optional`** **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Source

main.ts:211487

***

### original\_owner\_answer?

> **`optional`** **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Source

main.ts:211501

***

### original\_review\_text?

> **`optional`** **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Source

main.ts:211471

***

### owner\_answer?

> **`optional`** **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Source

main.ts:211498

***

### owner\_time\_ago?

> **`optional`** **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Source

main.ts:211504

***

### owner\_timestamp?

> **`optional`** **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:211509

***

### photos\_count?

> **`optional`** **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Source

main.ts:211485

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Source

main.ts:211464

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Source

main.ts:211495

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

profile name of the reviewer

#### Source

main.ts:211489

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the reviewer’s profile

#### Source

main.ts:211491

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:211461

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:211458

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:211481

***

### review\_highlights?

> **`optional`** **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Source

main.ts:211518

***

### review\_id?

> **`optional`** **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Source

main.ts:211513

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Source

main.ts:211468

***

### review\_url?

> **`optional`** **review\_url**: `string`

the URL of the review

#### Source

main.ts:211493

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Source

main.ts:211483

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Source

main.ts:211474

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:211479

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the review

#### Source

main.ts:211466
