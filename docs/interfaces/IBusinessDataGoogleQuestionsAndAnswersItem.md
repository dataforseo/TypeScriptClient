[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersItem

# Interface: IBusinessDataGoogleQuestionsAndAnswersItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](../classes/GoogleBusinessAnswerElement.md)[]

array of google business question items with answers
possible item types: google_business_question_item

#### Defined in

main.ts:214371

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

original text of the question

#### Defined in

main.ts:214364

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the user’s profile image

#### Defined in

main.ts:214356

***

### profile\_name?

> `optional` **profile\_name**: `string`

displayed name of the user

#### Defined in

main.ts:214360

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the user’s profile

#### Defined in

main.ts:214358

***

### question\_id?

> `optional` **question\_id**: `string`

ID of the question

#### Defined in

main.ts:214352

***

### question\_text?

> `optional` **question\_text**: `string`

current text of the question

#### Defined in

main.ts:214362

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Defined in

main.ts:214350

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:214348

***

### time\_ago?

> `optional` **time\_ago**: `string`

estimated time when the question was posted

#### Defined in

main.ts:214366

***

### timestamp?

> `optional` **timestamp**: `string`

exact time when the question was posted

#### Defined in

main.ts:214368

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:214345

***

### url?

> `optional` **url**: `string`

URL of the question

#### Defined in

main.ts:214354
