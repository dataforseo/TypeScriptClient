[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageIdListRequestInfo

# Class: OnPageIdListRequestInfo

Defined in: main.ts:163158

## Implements

- [`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListRequestInfo()

> **new OnPageIdListRequestInfo**(`data`?): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

Defined in: main.ts:163196

#### Parameters

##### data?

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md)

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:163166

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`datetime_from`](../interfaces/IOnPageIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:163173

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`datetime_to`](../interfaces/IOnPageIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:163192

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`include_metadata`](../interfaces/IOnPageIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:163178

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`limit`](../interfaces/IOnPageIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:163183

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`offset`](../interfaces/IOnPageIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:163188

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md).[`sort`](../interfaces/IOnPageIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163205

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:163227

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

Defined in: main.ts:163220

#### Parameters

##### data

`any`

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)
