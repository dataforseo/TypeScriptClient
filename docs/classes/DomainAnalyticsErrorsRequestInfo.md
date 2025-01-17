[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsErrorsRequestInfo

# Class: DomainAnalyticsErrorsRequestInfo

Defined in: main.ts:84686

## Implements

- [`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsRequestInfo()

> **new DomainAnalyticsErrorsRequestInfo**(`data`?): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

Defined in: main.ts:84720

#### Parameters

##### data?

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md)

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:84709

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`datetime_from`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:84716

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`datetime_to`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:84702

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: domain_analytics/task_get, postback_url, pingback_url

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`filtered_function`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:84691

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:84696

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84729

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84750

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

Defined in: main.ts:84743

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)
