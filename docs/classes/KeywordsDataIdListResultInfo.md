[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataIdListResultInfo

# Class: KeywordsDataIdListResultInfo

## Implements

- [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListResultInfo()

> **new KeywordsDataIdListResultInfo**(`data`?): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Defined in

main.ts:116151

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`cost`](../interfaces/IKeywordsDataIdListResultInfo.md#cost)

#### Defined in

main.ts:116145

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_done`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:116140

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:116135

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`id`](../interfaces/IKeywordsDataIdListResultInfo.md#id)

#### Defined in

main.ts:116127

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`metadata`](../interfaces/IKeywordsDataIdListResultInfo.md#metadata)

#### Defined in

main.ts:116147

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`status`](../interfaces/IKeywordsDataIdListResultInfo.md#status)

#### Defined in

main.ts:116143

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`url`](../interfaces/IKeywordsDataIdListResultInfo.md#url)

#### Defined in

main.ts:116130

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:116160

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:116189

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

#### Defined in

main.ts:116182
