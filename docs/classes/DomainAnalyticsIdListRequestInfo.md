[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsIdListRequestInfo

# Class: DomainAnalyticsIdListRequestInfo

## Implements

- [`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListRequestInfo()

> **new DomainAnalyticsIdListRequestInfo**(`data`?): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md)

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Defined in

main.ts:75967

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`datetime_from`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:75937

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`datetime_to`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:75944

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`include_metadata`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:75963

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`limit`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#limit)

#### Defined in

main.ts:75949

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`offset`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#offset)

#### Defined in

main.ts:75954

***

### sort?

> `optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IDomainAnalyticsIdListRequestInfo`](../interfaces/IDomainAnalyticsIdListRequestInfo.md).[`sort`](../interfaces/IDomainAnalyticsIdListRequestInfo.md#sort)

#### Defined in

main.ts:75959

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:75976

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:75998

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)

#### Defined in

main.ts:75991
