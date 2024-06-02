**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageMicrodataRequestInfo

# Class: OnPageMicrodataRequestInfo

## Implements

- [`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataRequestInfo(data)

> **new OnPageMicrodataRequestInfo**(`data`?): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md)

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Source

main.ts:157811

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`id`](../interfaces/IOnPageMicrodataRequestInfo.md#id)

#### Source

main.ts:157795

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`tag`](../interfaces/IOnPageMicrodataRequestInfo.md#tag)

#### Source

main.ts:157807

***

### url?

> **`optional`** **url**: `string`

resource URL
required field
you can get this URL in the response of the Pages endpoint
example:
https://dataforseo.com/apis

#### Implementation of

[`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md).[`url`](../interfaces/IOnPageMicrodataRequestInfo.md#url)

#### Source

main.ts:157801

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:157820

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:157839

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Source

main.ts:157832
