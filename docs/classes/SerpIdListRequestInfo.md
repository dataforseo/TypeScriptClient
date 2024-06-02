**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpIdListRequestInfo

# Class: SerpIdListRequestInfo

## Implements

- [`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpIdListRequestInfo(data)

> **new SerpIdListRequestInfo**(`data`?): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Parameters

• **data?**: [`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md)

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Source

main.ts:23296

## Properties

### datetime\_from?

> **`optional`** **datetime\_from**: `string`

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`datetime_from`](../interfaces/ISerpIdListRequestInfo.md#datetime_from)

#### Source

main.ts:23266

***

### datetime\_to?

> **`optional`** **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`datetime_to`](../interfaces/ISerpIdListRequestInfo.md#datetime_to)

#### Source

main.ts:23273

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`include_metadata`](../interfaces/ISerpIdListRequestInfo.md#include_metadata)

#### Source

main.ts:23292

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`limit`](../interfaces/ISerpIdListRequestInfo.md#limit)

#### Source

main.ts:23278

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`offset`](../interfaces/ISerpIdListRequestInfo.md#offset)

#### Source

main.ts:23283

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md).[`sort`](../interfaces/ISerpIdListRequestInfo.md#sort)

#### Source

main.ts:23288

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:23305

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:23327

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Source

main.ts:23320
