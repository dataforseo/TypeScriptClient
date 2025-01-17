[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsIdListResultInfo

# Class: DomainAnalyticsIdListResultInfo

Defined in: main.ts:84462

## Implements

- [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListResultInfo()

> **new DomainAnalyticsIdListResultInfo**(`data`?): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

Defined in: main.ts:84488

#### Parameters

##### data?

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:84482

cost of the task, USD

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`cost`](../interfaces/IDomainAnalyticsIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:84477

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_done`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:84472

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:84464

id of the task

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`id`](../interfaces/IDomainAnalyticsIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:84484

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`metadata`](../interfaces/IDomainAnalyticsIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:84480

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`status`](../interfaces/IDomainAnalyticsIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:84467

URL of the task
URL you used for making an API call

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`url`](../interfaces/IDomainAnalyticsIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84497

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84526

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

Defined in: main.ts:84519

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)
