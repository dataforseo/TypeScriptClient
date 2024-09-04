[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleQuestionsAndAnswersItem

# Class: BusinessDataGoogleQuestionsAndAnswersItem

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersItem()

> **new BusinessDataGoogleQuestionsAndAnswersItem**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Defined in

main.ts:214274

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)[]

array of google business question items with answers
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#items)

#### Defined in

main.ts:214270

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

original text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`original_question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#original_question_text)

#### Defined in

main.ts:214263

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_image_url)

#### Defined in

main.ts:214255

***

### profile\_name?

> `optional` **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_name)

#### Defined in

main.ts:214259

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_url)

#### Defined in

main.ts:214257

***

### question\_id?

> `optional` **question\_id**: `string`

ID of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_id)

#### Defined in

main.ts:214251

***

### question\_text?

> `optional` **question\_text**: `string`

current text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_text)

#### Defined in

main.ts:214261

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_absolute)

#### Defined in

main.ts:214249

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_group)

#### Defined in

main.ts:214247

***

### time\_ago?

> `optional` **time\_ago**: `string`

estimated time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#time_ago)

#### Defined in

main.ts:214265

***

### timestamp?

> `optional` **timestamp**: `string`

exact time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#timestamp)

#### Defined in

main.ts:214267

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#type)

#### Defined in

main.ts:214244

***

### url?

> `optional` **url**: `string`

URL of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#url)

#### Defined in

main.ts:214253

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:214283

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:214316

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersItem`](BusinessDataGoogleQuestionsAndAnswersItem.md)

#### Defined in

main.ts:214309
