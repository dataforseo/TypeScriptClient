[**Documentation**](../README.md)

***

[Documentation](../README.md) / ItemsWithoutAnswers

# Class: ItemsWithoutAnswers

Defined in: main.ts:224362

## Implements

- [`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ItemsWithoutAnswers()

> **new ItemsWithoutAnswers**(`data`?): [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

Defined in: main.ts:224394

#### Parameters

##### data?

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

#### Returns

[`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

Defined in: main.ts:224390

array of items
items within google_business_question_item

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`items`](../interfaces/IItemsWithoutAnswers.md#items)

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

Defined in: main.ts:224383

original text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`original_question_text`](../interfaces/IItemsWithoutAnswers.md#original_question_text)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:224375

URL of the user’s profile image

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_image_url`](../interfaces/IItemsWithoutAnswers.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:224379

displayed name of the user

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_name`](../interfaces/IItemsWithoutAnswers.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:224377

URL of the user’s profile

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_url`](../interfaces/IItemsWithoutAnswers.md#profile_url)

***

### question\_id?

> `optional` **question\_id**: `string`

Defined in: main.ts:224371

ID of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_id`](../interfaces/IItemsWithoutAnswers.md#question_id)

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:224381

current text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_text`](../interfaces/IItemsWithoutAnswers.md#question_text)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:224369

absolute rank among all the elements

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_absolute`](../interfaces/IItemsWithoutAnswers.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:224367

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_group`](../interfaces/IItemsWithoutAnswers.md#rank_group)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:224385

estimated time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`time_ago`](../interfaces/IItemsWithoutAnswers.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:224387

exact time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`timestamp`](../interfaces/IItemsWithoutAnswers.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:224364

type of element

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`type`](../interfaces/IItemsWithoutAnswers.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:224373

URL of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`url`](../interfaces/IItemsWithoutAnswers.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:224403

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:224432

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)

Defined in: main.ts:224425

#### Parameters

##### data

`any`

#### Returns

[`ItemsWithoutAnswers`](ItemsWithoutAnswers.md)
