**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ItemsWithoutAnswers

# Class: ItemsWithoutAnswers

## Implements

- [`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ItemsWithoutAnswers(data)

> **new ItemsWithoutAnswers**(`data`?): [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Parameters

• **data?**: [`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

#### Returns

[`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Source

main.ts:212200

## Properties

### items?

> **`optional`** **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

array of items
items within google_business_question_item

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`items`](../interfaces/IItemsWithoutAnswers.md#items)

#### Source

main.ts:212196

***

### original\_question\_text?

> **`optional`** **original\_question\_text**: `string`

original text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`original_question_text`](../interfaces/IItemsWithoutAnswers.md#original_question_text)

#### Source

main.ts:212189

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_image_url`](../interfaces/IItemsWithoutAnswers.md#profile_image_url)

#### Source

main.ts:212181

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_name`](../interfaces/IItemsWithoutAnswers.md#profile_name)

#### Source

main.ts:212185

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_url`](../interfaces/IItemsWithoutAnswers.md#profile_url)

#### Source

main.ts:212183

***

### question\_id?

> **`optional`** **question\_id**: `string`

ID of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_id`](../interfaces/IItemsWithoutAnswers.md#question_id)

#### Source

main.ts:212177

***

### question\_text?

> **`optional`** **question\_text**: `string`

current text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_text`](../interfaces/IItemsWithoutAnswers.md#question_text)

#### Source

main.ts:212187

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_absolute`](../interfaces/IItemsWithoutAnswers.md#rank_absolute)

#### Source

main.ts:212175

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_group`](../interfaces/IItemsWithoutAnswers.md#rank_group)

#### Source

main.ts:212173

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

estimated time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`time_ago`](../interfaces/IItemsWithoutAnswers.md#time_ago)

#### Source

main.ts:212191

***

### timestamp?

> **`optional`** **timestamp**: `string`

exact time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`timestamp`](../interfaces/IItemsWithoutAnswers.md#timestamp)

#### Source

main.ts:212193

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`type`](../interfaces/IItemsWithoutAnswers.md#type)

#### Source

main.ts:212170

***

### url?

> **`optional`** **url**: `string`

URL of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`url`](../interfaces/IItemsWithoutAnswers.md#url)

#### Source

main.ts:212179

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:212209

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:212238

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Parameters

• **data**: `any`

#### Returns

[`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Source

main.ts:212231
