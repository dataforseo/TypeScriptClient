**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateTagsRequestInfo

# Class: OnPageDuplicateTagsRequestInfo

## Implements

- [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsRequestInfo(data)

> **new OnPageDuplicateTagsRequestInfo**(`data`?): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Source

main.ts:152660

## Properties

### accumulator?

> **`optional`** **accumulator**: `string`

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#accumulator)

#### Source

main.ts:152640

***

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`id`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#id)

#### Source

main.ts:152634

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`limit`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#limit)

#### Source

main.ts:152645

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`offset`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#offset)

#### Source

main.ts:152650

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`tag`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#tag)

#### Source

main.ts:152656

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`type`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#type)

#### Source

main.ts:152636

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:152669

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:152691

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Source

main.ts:152684
