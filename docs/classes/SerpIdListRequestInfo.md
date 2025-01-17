[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpIdListRequestInfo

# Class: SerpIdListRequestInfo

Defined in: main.ts:25415

## Implements

- [`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpIdListRequestInfo()

> **new SerpIdListRequestInfo**(`data`?): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

Defined in: main.ts:25453

#### Parameters

##### data?

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md)

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:25423

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`datetime_from`](../interfaces/ISerpIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:25430

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`datetime_to`](../interfaces/ISerpIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:25449

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`include_metadata`](../interfaces/ISerpIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:25435

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`limit`](../interfaces/ISerpIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:25440

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`offset`](../interfaces/ISerpIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:25445

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`sort`](../interfaces/ISerpIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25462

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25484

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

Defined in: main.ts:25477

#### Parameters

##### data

`any`

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)
