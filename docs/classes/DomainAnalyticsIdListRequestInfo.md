[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsIdListRequestInfo

# Class: DomainAnalyticsIdListRequestInfo

Defined in: main.ts:84374

## Implements

- [`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListRequestInfo()

> **new DomainAnalyticsIdListRequestInfo**(`data`?): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

Defined in: main.ts:84412

#### Parameters

##### data?

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md)

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:84382

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`datetime_from`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:84389

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`datetime_to`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:84408

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`include_metadata`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:84394

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:84399

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:84404

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`sort`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84421

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84443

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

Defined in: main.ts:84436

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)
