**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateContentRequestInfo

# Class: OnPageDuplicateContentRequestInfo

## Implements

- [`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentRequestInfo(data)

> **new OnPageDuplicateContentRequestInfo**(`data`?): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md)

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Source

main.ts:155909

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`id`](../interfaces/IOnPageDuplicateContentRequestInfo.md#id)

#### Source

main.ts:155881

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`limit`](../interfaces/IOnPageDuplicateContentRequestInfo.md#limit)

#### Source

main.ts:155894

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`offset`](../interfaces/IOnPageDuplicateContentRequestInfo.md#offset)

#### Source

main.ts:155899

***

### similarity?

> **`optional`** **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`similarity`](../interfaces/IOnPageDuplicateContentRequestInfo.md#similarity)

#### Source

main.ts:155889

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`tag`](../interfaces/IOnPageDuplicateContentRequestInfo.md#tag)

#### Source

main.ts:155905

***

### url?

> **`optional`** **url**: `string`

page URL
required field
specify the initial page you want to receive duplicate content for

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`url`](../interfaces/IOnPageDuplicateContentRequestInfo.md#url)

#### Source

main.ts:155885

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:155918

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:155940

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

#### Source

main.ts:155933
