**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataIdListRequestInfo

# Class: AppDataIdListRequestInfo

## Implements

- [`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataIdListRequestInfo(data)

> **new AppDataIdListRequestInfo**(`data`?): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md)

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Source

main.ts:182775

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

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IAppDataIdListRequestInfo.md#datetime_from)

#### Source

main.ts:182745

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

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IAppDataIdListRequestInfo.md#datetime_to)

#### Source

main.ts:182752

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IAppDataIdListRequestInfo.md#include_metadata)

#### Source

main.ts:182771

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`limit`](../interfaces/IAppDataIdListRequestInfo.md#limit)

#### Source

main.ts:182757

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`offset`](../interfaces/IAppDataIdListRequestInfo.md#offset)

#### Source

main.ts:182762

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`sort`](../interfaces/IAppDataIdListRequestInfo.md#sort)

#### Source

main.ts:182767

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:182784

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:182806

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

#### Source

main.ts:182799
