**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsIdListResultInfo

# Class: DomainAnalyticsIdListResultInfo

## Implements

- [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListResultInfo(data)

> **new DomainAnalyticsIdListResultInfo**(`data`?): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Source

main.ts:74960

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`cost`](../interfaces/IDomainAnalyticsIdListResultInfo.md#cost)

#### Source

main.ts:74954

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_done`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_done)

#### Source

main.ts:74949

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_posted)

#### Source

main.ts:74944

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`id`](../interfaces/IDomainAnalyticsIdListResultInfo.md#id)

#### Source

main.ts:74936

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`metadata`](../interfaces/IDomainAnalyticsIdListResultInfo.md#metadata)

#### Source

main.ts:74956

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`status`](../interfaces/IDomainAnalyticsIdListResultInfo.md#status)

#### Source

main.ts:74952

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`url`](../interfaces/IDomainAnalyticsIdListResultInfo.md#url)

#### Source

main.ts:74939

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:74969

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:74998

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Source

main.ts:74991
