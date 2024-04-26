**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataIdListResultInfo

# Class: KeywordsDataIdListResultInfo

## Implements

- [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListResultInfo(data)

> **new KeywordsDataIdListResultInfo**(`data`?): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Source

main.ts:115039

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`cost`](../interfaces/IKeywordsDataIdListResultInfo.md#cost)

#### Source

main.ts:115033

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_done`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_done)

#### Source

main.ts:115028

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_posted)

#### Source

main.ts:115023

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`id`](../interfaces/IKeywordsDataIdListResultInfo.md#id)

#### Source

main.ts:115015

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`metadata`](../interfaces/IKeywordsDataIdListResultInfo.md#metadata)

#### Source

main.ts:115035

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`status`](../interfaces/IKeywordsDataIdListResultInfo.md#status)

#### Source

main.ts:115031

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`url`](../interfaces/IKeywordsDataIdListResultInfo.md#url)

#### Source

main.ts:115018

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:115048

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:115077

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Source

main.ts:115070
