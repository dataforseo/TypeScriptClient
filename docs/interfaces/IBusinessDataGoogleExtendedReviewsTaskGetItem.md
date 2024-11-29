[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleExtendedReviewsTaskGetItem

# Interface: IBusinessDataGoogleExtendedReviewsTaskGetItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images submitted by the reviewer

#### Defined in

main.ts:223433

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Defined in

main.ts:223405

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Defined in

main.ts:223419

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Defined in

main.ts:223389

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Defined in

main.ts:223416

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Defined in

main.ts:223422

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:223427

***

### photos\_count?

> `optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Defined in

main.ts:223403

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:223382

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Defined in

main.ts:223413

***

### profile\_name?

> `optional` **profile\_name**: `string`

profile name of the reviewer

#### Defined in

main.ts:223407

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Defined in

main.ts:223409

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:223379

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:223376

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:223399

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Defined in

main.ts:223436

***

### review\_id?

> `optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Defined in

main.ts:223431

***

### review\_text?

> `optional` **review\_text**: `string`

the content of the review

#### Defined in

main.ts:223386

***

### review\_url?

> `optional` **review\_url**: `string`

the URL of the review

#### Defined in

main.ts:223411

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Defined in

main.ts:223401

***

### source?

> `optional` **source**: [`Source`](../classes/Source.md)

source of the review
contains information about the source where the review was posted

#### Defined in

main.ts:223439

***

### time\_ago?

> `optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Defined in

main.ts:223392

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:223397

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:223373

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the review

#### Defined in

main.ts:223384
