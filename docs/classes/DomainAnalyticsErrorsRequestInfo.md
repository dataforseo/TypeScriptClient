**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsErrorsRequestInfo

# Class: DomainAnalyticsErrorsRequestInfo

## Implements

- [`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsErrorsRequestInfo(data)

> **new DomainAnalyticsErrorsRequestInfo**(`data`?): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md)

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Source

main.ts:75715

## Properties

### datetime\_from?

> **`optional`** **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`datetime_from`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_from)

#### Source

main.ts:75704

***

### datetime\_to?

> **`optional`** **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`datetime_to`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#datetime_to)

#### Source

main.ts:75711

***

### filtered\_function?

> **`optional`** **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: domain_analytics/task_get, postback_url, pingback_url

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`filtered_function`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#filtered_function)

#### Source

main.ts:75697

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#limit)

#### Source

main.ts:75686

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IDomainAnalyticsErrorsRequestInfo`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsErrorsRequestInfo.md#offset)

#### Source

main.ts:75691

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:75724

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:75745

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)

#### Source

main.ts:75738
