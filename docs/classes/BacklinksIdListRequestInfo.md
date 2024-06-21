**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksIdListRequestInfo

# Class: BacklinksIdListRequestInfo

## Implements

- [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIdListRequestInfo(data)

> **new BacklinksIdListRequestInfo**(`data`?): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Source

main.ts:135773

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

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_from`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_from)

#### Source

main.ts:135743

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

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_to`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_to)

#### Source

main.ts:135750

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`include_metadata`](../interfaces/IBacklinksIdListRequestInfo.md#include_metadata)

#### Source

main.ts:135769

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`limit`](../interfaces/IBacklinksIdListRequestInfo.md#limit)

#### Source

main.ts:135755

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`offset`](../interfaces/IBacklinksIdListRequestInfo.md#offset)

#### Source

main.ts:135760

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`sort`](../interfaces/IBacklinksIdListRequestInfo.md#sort)

#### Source

main.ts:135765

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:135782

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:135804

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Source

main.ts:135797
