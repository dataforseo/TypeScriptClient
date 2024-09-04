[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageDuplicateTagsRequestInfo

# Class: OnPageDuplicateTagsRequestInfo

## Implements

- [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateTagsRequestInfo()

> **new OnPageDuplicateTagsRequestInfo**(`data`?): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md)

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Defined in

main.ts:160468

## Properties

### accumulator?

> `optional` **accumulator**: `string`

tag value
optional field
specify a title or description here if you want to receive a list of duplicate pages that contains this tag

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`accumulator`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#accumulator)

#### Defined in

main.ts:160448

***

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`id`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#id)

#### Defined in

main.ts:160442

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`limit`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#limit)

#### Defined in

main.ts:160453

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`offset`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#offset)

#### Defined in

main.ts:160458

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`tag`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#tag)

#### Defined in

main.ts:160464

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IOnPageDuplicateTagsRequestInfo`](../interfaces/IOnPageDuplicateTagsRequestInfo.md).[`type`](../interfaces/IOnPageDuplicateTagsRequestInfo.md#type)

#### Defined in

main.ts:160444

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:160477

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:160499

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)

#### Defined in

main.ts:160492
