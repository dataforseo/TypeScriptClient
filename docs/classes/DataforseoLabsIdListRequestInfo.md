**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsIdListRequestInfo

# Class: DataforseoLabsIdListRequestInfo

## Implements

- [`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListRequestInfo(data)

> **new DataforseoLabsIdListRequestInfo**(`data`?): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md)

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Source

main.ts:80264

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

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`datetime_from`](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_from)

#### Source

main.ts:80234

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

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`datetime_to`](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_to)

#### Source

main.ts:80241

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`include_metadata`](../interfaces/IDataforseoLabsIdListRequestInfo.md#include_metadata)

#### Source

main.ts:80260

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsIdListRequestInfo.md#limit)

#### Source

main.ts:80246

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsIdListRequestInfo.md#offset)

#### Source

main.ts:80251

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`sort`](../interfaces/IDataforseoLabsIdListRequestInfo.md#sort)

#### Source

main.ts:80256

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80273

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80295

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Source

main.ts:80288
