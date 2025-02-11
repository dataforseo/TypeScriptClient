[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsRequestInfo

# Class: OnPageDuplicateTagsRequestInfo

Defined in: main.ts:168634

## Implements

- [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsRequestInfo()

> **new OnPageDuplicateTagsRequestInfo**(`data`?): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

Defined in: main.ts:168666

#### Parameters

##### data?

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

## Properties

### accumulator?

> `optional` **accumulator**: `string`

Defined in: main.ts:168646

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#accumulator)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:168640

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`id`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:168651

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`limit`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:168656

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`offset`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:168662

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`tag`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#tag)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:168642

type of element

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`type`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168675

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168697

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

Defined in: main.ts:168690

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)
