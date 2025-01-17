[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsIdListRequestInfo

# Class: DataforseoLabsIdListRequestInfo

Defined in: main.ts:89922

## Implements

- [`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListRequestInfo()

> **new DataforseoLabsIdListRequestInfo**(`data`?): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

Defined in: main.ts:89960

#### Parameters

##### data?

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md)

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:89930

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`datetime_from`](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:89937

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`datetime_to`](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:89956

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`include_metadata`](../interfaces/IDataforseoLabsIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:89942

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:89947

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:89952

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md).[`sort`](../interfaces/IDataforseoLabsIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89969

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89991

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

Defined in: main.ts:89984

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)
