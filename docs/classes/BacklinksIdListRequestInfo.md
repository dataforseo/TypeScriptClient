[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIdListRequestInfo

# Class: BacklinksIdListRequestInfo

## Implements

- [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIdListRequestInfo()

> **new BacklinksIdListRequestInfo**(`data`?): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

##### data?

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Defined in

main.ts:148726

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

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_from`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:148696

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

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_to`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:148703

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`include_metadata`](../interfaces/IBacklinksIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:148722

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`limit`](../interfaces/IBacklinksIdListRequestInfo.md#limit)

#### Defined in

main.ts:148708

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`offset`](../interfaces/IBacklinksIdListRequestInfo.md#offset)

#### Defined in

main.ts:148713

***

### sort?

> `optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`sort`](../interfaces/IBacklinksIdListRequestInfo.md#sort)

#### Defined in

main.ts:148718

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:148735

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:148757

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Defined in

main.ts:148750
