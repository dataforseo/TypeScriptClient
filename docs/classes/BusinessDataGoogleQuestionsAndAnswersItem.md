[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersItem

# Class: BusinessDataGoogleQuestionsAndAnswersItem

Defined in: main.ts:225094

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersItem()

> **new BusinessDataGoogleQuestionsAndAnswersItem**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

Defined in: main.ts:225126

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)[]

Defined in: main.ts:225122

array of google business question items with answers
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#items)

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

Defined in: main.ts:225115

original text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`original_question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#original_question_text)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:225107

URL of the user’s profile image

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:225111

displayed name of the user

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:225109

URL of the user’s profile

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_url)

***

### question\_id?

> `optional` **question\_id**: `string`

Defined in: main.ts:225103

ID of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_id)

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:225113

current text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_text)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:225101

absolute rank among all the elements

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:225099

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_group)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:225117

estimated time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:225119

exact time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:225096

type of element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:225105

URL of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225135

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:225168

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

Defined in: main.ts:225161

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)
