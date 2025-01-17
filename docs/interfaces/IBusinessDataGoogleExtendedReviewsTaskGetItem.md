[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleExtendedReviewsTaskGetItem

# Interface: IBusinessDataGoogleExtendedReviewsTaskGetItem

Defined in: main.ts:223439

## Indexable

\[`key`: `string`\]: `any`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:223501

images submitted by the reviewer

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

Defined in: main.ts:223473

indicates whether the reviewer has a ‘local guide’ status

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

Defined in: main.ts:223487

original text of the owner’s response
the original response to the review, no auto-translate applied

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

Defined in: main.ts:223457

original content of the review
the original content of the review, no auto-translate applied

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

Defined in: main.ts:223484

text of the owner’s response
the owner’s response to the review

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

Defined in: main.ts:223490

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

Defined in: main.ts:223495

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### photos\_count?

> `optional` **photos\_count**: `number`

Defined in: main.ts:223471

total number of photos submitted by the reviewer

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:223450

the alignment of the review in SERP
can take the following values: right

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:223481

URL of the reviewer’s profile image

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:223475

profile name of the reviewer

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:223477

URL of the reviewer’s profile

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:223447

absolute rank among all the listed reviews
absolute position among all reviews on the list

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:223444

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:223467

the rating score submitted by the reviewer

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

Defined in: main.ts:223504

review highlights
contains highlighted review criteria and assessments

***

### review\_id?

> `optional` **review\_id**: `string`

Defined in: main.ts:223499

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:223454

the content of the review

***

### review\_url?

> `optional` **review\_url**: `string`

Defined in: main.ts:223479

the URL of the review

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:223469

total number of reviews submitted by the reviewer

***

### source?

> `optional` **source**: [`Source`](../classes/Source.md)

Defined in: main.ts:223507

source of the review
contains information about the source where the review was posted

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:223460

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:223465

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:223441

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:223452

the XPath of the review
