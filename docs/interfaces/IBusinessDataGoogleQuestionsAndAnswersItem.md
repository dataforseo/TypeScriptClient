**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersItem

# Interface: IBusinessDataGoogleQuestionsAndAnswersItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`GoogleBusinessAnswerElement`](../classes/GoogleBusinessAnswerElement.md)[]

array of google business question items with answers
possible item types: google_business_question_item

#### Source

main.ts:212521

***

### original\_question\_text?

> **`optional`** **original\_question\_text**: `string`

original text of the question

#### Source

main.ts:212514

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the user’s profile image

#### Source

main.ts:212506

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

displayed name of the user

#### Source

main.ts:212510

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the user’s profile

#### Source

main.ts:212508

***

### question\_id?

> **`optional`** **question\_id**: `string`

ID of the question

#### Source

main.ts:212502

***

### question\_text?

> **`optional`** **question\_text**: `string`

current text of the question

#### Source

main.ts:212512

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Source

main.ts:212500

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:212498

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

estimated time when the question was posted

#### Source

main.ts:212516

***

### timestamp?

> **`optional`** **timestamp**: `string`

exact time when the question was posted

#### Source

main.ts:212518

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:212495

***

### url?

> **`optional`** **url**: `string`

URL of the question

#### Source

main.ts:212504
