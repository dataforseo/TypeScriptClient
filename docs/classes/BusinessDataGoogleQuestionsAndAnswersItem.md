**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersItem

# Class: BusinessDataGoogleQuestionsAndAnswersItem

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersItem(data)

> **new BusinessDataGoogleQuestionsAndAnswersItem**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Source

main.ts:207121

## Properties

### items?

> **`optional`** **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)[]

array of google business question items with answers
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#items)

#### Source

main.ts:207117

***

### original\_question\_text?

> **`optional`** **original\_question\_text**: `string`

original text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`original_question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#original_question_text)

#### Source

main.ts:207110

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_image_url)

#### Source

main.ts:207102

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_name)

#### Source

main.ts:207106

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_url)

#### Source

main.ts:207104

***

### question\_id?

> **`optional`** **question\_id**: `string`

ID of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_id)

#### Source

main.ts:207098

***

### question\_text?

> **`optional`** **question\_text**: `string`

current text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_text)

#### Source

main.ts:207108

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_absolute)

#### Source

main.ts:207096

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_group)

#### Source

main.ts:207094

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

estimated time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#time_ago)

#### Source

main.ts:207112

***

### timestamp?

> **`optional`** **timestamp**: `string`

exact time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#timestamp)

#### Source

main.ts:207114

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#type)

#### Source

main.ts:207091

***

### url?

> **`optional`** **url**: `string`

URL of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#url)

#### Source

main.ts:207100

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:207130

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:207163

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Source

main.ts:207156
