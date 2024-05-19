**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageIdListRequestInfo

# Class: OnPageIdListRequestInfo

## Implements

- [`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListRequestInfo(data)

> **new OnPageIdListRequestInfo**(`data`?): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md)

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Source

main.ts:148856

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

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`datetime_from`](../interfaces/IOnPageIdListRequestInfo.md#datetime_from)

#### Source

main.ts:148826

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

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`datetime_to`](../interfaces/IOnPageIdListRequestInfo.md#datetime_to)

#### Source

main.ts:148833

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`include_metadata`](../interfaces/IOnPageIdListRequestInfo.md#include_metadata)

#### Source

main.ts:148852

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`limit`](../interfaces/IOnPageIdListRequestInfo.md#limit)

#### Source

main.ts:148838

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`offset`](../interfaces/IOnPageIdListRequestInfo.md#offset)

#### Source

main.ts:148843

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`sort`](../interfaces/IOnPageIdListRequestInfo.md#sort)

#### Source

main.ts:148848

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:148865

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:148887

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Source

main.ts:148880
