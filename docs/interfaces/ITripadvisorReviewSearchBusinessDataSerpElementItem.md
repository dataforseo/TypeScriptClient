**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITripadvisorReviewSearchBusinessDataSerpElementItem

# Interface: ITripadvisorReviewSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_of\_visit?

> **`optional`** **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:214224

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Source

main.ts:214215

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:214212

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:214209

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:214219

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Source

main.ts:214239

***

### review\_highlights?

> **`optional`** **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Source

main.ts:214242

***

### review\_images?

> **`optional`** **review\_images**: [`ImageUrlInfo`](../classes/ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Source

main.ts:214235

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Source

main.ts:214233

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:214229

***

### title?

> **`optional`** **title**: `string`

title of the review

#### Source

main.ts:214231

***

### url?

> **`optional`** **url**: `string`

URL of the review

#### Source

main.ts:214217

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Source

main.ts:214237
