[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentRequestInfo

# Class: OnPageDuplicateContentRequestInfo

Defined in: main.ts:169020

## Implements

- [`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentRequestInfo()

> **new OnPageDuplicateContentRequestInfo**(`data`?): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

Defined in: main.ts:169054

#### Parameters

##### data?

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md)

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:169026

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`id`](../interfaces/IOnPageDuplicateContentRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:169039

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`limit`](../interfaces/IOnPageDuplicateContentRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:169044

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`offset`](../interfaces/IOnPageDuplicateContentRequestInfo.md#offset)

***

### similarity?

> `optional` **similarity**: `number`

Defined in: main.ts:169034

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`similarity`](../interfaces/IOnPageDuplicateContentRequestInfo.md#similarity)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:169050

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`tag`](../interfaces/IOnPageDuplicateContentRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:169030

page URL
required field
specify the initial page you want to receive duplicate content for

#### Implementation of

[`IOnPageDuplicateContentRequestInfo`](../interfaces/IOnPageDuplicateContentRequestInfo.md).[`url`](../interfaces/IOnPageDuplicateContentRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169063

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169085

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)

Defined in: main.ts:169078

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)
