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

main.ts:206398

## Properties

### items?

> **`optional`** **items**: `any`

array of items
items within google_business_question_item

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`items`](../interfaces/IItemsWithoutAnswers.md#items)

#### Source

main.ts:206394

***

### original\_question\_text?

> **`optional`** **original\_question\_text**: `string`

original text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`original_question_text`](../interfaces/IItemsWithoutAnswers.md#original_question_text)

#### Source

main.ts:206387

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the user’s profile image

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_image_url`](../interfaces/IItemsWithoutAnswers.md#profile_image_url)

#### Source

main.ts:206379

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

displayed name of the user

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_name`](../interfaces/IItemsWithoutAnswers.md#profile_name)

#### Source

main.ts:206383

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the user’s profile

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_url`](../interfaces/IItemsWithoutAnswers.md#profile_url)

#### Source

main.ts:206381

***

### question\_id?

> **`optional`** **question\_id**: `string`

ID of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_id`](../interfaces/IItemsWithoutAnswers.md#question_id)

#### Source

main.ts:206375

***

### question\_text?

> **`optional`** **question\_text**: `string`

current text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_text`](../interfaces/IItemsWithoutAnswers.md#question_text)

#### Source

main.ts:206385

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_absolute`](../interfaces/IItemsWithoutAnswers.md#rank_absolute)

#### Source

main.ts:206373

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_group`](../interfaces/IItemsWithoutAnswers.md#rank_group)

#### Source

main.ts:206371

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

estimated time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`time_ago`](../interfaces/IItemsWithoutAnswers.md#time_ago)

#### Source

main.ts:206389

***

### timestamp?

> **`optional`** **timestamp**: `string`

exact time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`timestamp`](../interfaces/IItemsWithoutAnswers.md#timestamp)

#### Source

main.ts:206391

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`type`](../interfaces/IItemsWithoutAnswers.md#type)

#### Source

main.ts:206368

***

### url?

> **`optional`** **url**: `string`

URL of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`url`](../interfaces/IItemsWithoutAnswers.md#url)

#### Source

main.ts:206377

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:206407

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:206436

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Parameters

• **data**: `any`

#### Returns

[`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

#### Source

main.ts:206429