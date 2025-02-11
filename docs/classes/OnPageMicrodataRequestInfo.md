[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataRequestInfo

# Class: OnPageMicrodataRequestInfo

Defined in: main.ts:171716

## Implements

- [`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataRequestInfo()

> **new OnPageMicrodataRequestInfo**(`data`?): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

Defined in: main.ts:171738

#### Parameters

##### data?

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md)

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:171722

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`id`](../interfaces/IOnPageMicrodataRequestInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:171734

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`tag`](../interfaces/IOnPageMicrodataRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:171728

resource URL
required field
you can get this URL in the response of the Pages endpoint
example:
https://dataforseo.com/apis

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`url`](../interfaces/IOnPageMicrodataRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171747

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171766

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

Defined in: main.ts:171759

#### Parameters

##### data

`any`

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)
