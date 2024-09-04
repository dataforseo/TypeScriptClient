[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleBusinessAnswerElement

# Class: GoogleBusinessAnswerElement

## Implements

- [`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleBusinessAnswerElement()

> **new GoogleBusinessAnswerElement**(`data`?): [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Parameters

• **data?**: [`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md)

#### Returns

[`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Defined in

main.ts:214166

## Properties

### answer\_id?

> `optional` **answer\_id**: `string`

ID of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`answer_id`](../interfaces/IGoogleBusinessAnswerElement.md#answer_id)

#### Defined in

main.ts:214148

***

### answer\_text?

> `optional` **answer\_text**: `string`

current text of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`answer_text`](../interfaces/IGoogleBusinessAnswerElement.md#answer_text)

#### Defined in

main.ts:214156

***

### original\_answer\_text?

> `optional` **original\_answer\_text**: `string`

original text of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`original_answer_text`](../interfaces/IGoogleBusinessAnswerElement.md#original_answer_text)

#### Defined in

main.ts:214158

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_image_url`](../interfaces/IGoogleBusinessAnswerElement.md#profile_image_url)

#### Defined in

main.ts:214150

***

### profile\_name?

> `optional` **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_name`](../interfaces/IGoogleBusinessAnswerElement.md#profile_name)

#### Defined in

main.ts:214154

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_url`](../interfaces/IGoogleBusinessAnswerElement.md#profile_url)

#### Defined in

main.ts:214152

***

### time\_ago?

> `optional` **time\_ago**: `string`

estimated time when the answer was posted

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`time_ago`](../interfaces/IGoogleBusinessAnswerElement.md#time_ago)

#### Defined in

main.ts:214160

***

### timestamp?

> `optional` **timestamp**: `string`

exact time when the answer was posted

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`timestamp`](../interfaces/IGoogleBusinessAnswerElement.md#timestamp)

#### Defined in

main.ts:214162

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`type`](../interfaces/IGoogleBusinessAnswerElement.md#type)

#### Defined in

main.ts:214146

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:214175

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:214200

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Defined in

main.ts:214193
