**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleBusinessAnswerElement

# Class: GoogleBusinessAnswerElement

## Implements

- [`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleBusinessAnswerElement(data)

> **new GoogleBusinessAnswerElement**(`data`?): [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Parameters

• **data?**: [`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md)

#### Returns

[`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Source

main.ts:209369

## Properties

### answer\_id?

> **`optional`** **answer\_id**: `string`

ID of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`answer_id`](../interfaces/IGoogleBusinessAnswerElement.md#answer_id)

#### Source

main.ts:209351

***

### answer\_text?

> **`optional`** **answer\_text**: `string`

current text of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`answer_text`](../interfaces/IGoogleBusinessAnswerElement.md#answer_text)

#### Source

main.ts:209359

***

### original\_answer\_text?

> **`optional`** **original\_answer\_text**: `string`

original text of the answer

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`original_answer_text`](../interfaces/IGoogleBusinessAnswerElement.md#original_answer_text)

#### Source

main.ts:209361

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_image_url`](../interfaces/IGoogleBusinessAnswerElement.md#profile_image_url)

#### Source

main.ts:209353

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_name`](../interfaces/IGoogleBusinessAnswerElement.md#profile_name)

#### Source

main.ts:209357

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`profile_url`](../interfaces/IGoogleBusinessAnswerElement.md#profile_url)

#### Source

main.ts:209355

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

estimated time when the answer was posted

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`time_ago`](../interfaces/IGoogleBusinessAnswerElement.md#time_ago)

#### Source

main.ts:209363

***

### timestamp?

> **`optional`** **timestamp**: `string`

exact time when the answer was posted

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`timestamp`](../interfaces/IGoogleBusinessAnswerElement.md#timestamp)

#### Source

main.ts:209365

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IGoogleBusinessAnswerElement`](../interfaces/IGoogleBusinessAnswerElement.md).[`type`](../interfaces/IGoogleBusinessAnswerElement.md#type)

#### Source

main.ts:209349

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209378

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209403

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

#### Source

main.ts:209396
