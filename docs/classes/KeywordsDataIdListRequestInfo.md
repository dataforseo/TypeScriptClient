[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataIdListRequestInfo

# Class: KeywordsDataIdListRequestInfo

Defined in: main.ts:125274

## Implements

- [`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListRequestInfo()

> **new KeywordsDataIdListRequestInfo**(`data`?): [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

Defined in: main.ts:125312

#### Parameters

##### data?

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md)

#### Returns

[`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:125282

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IKeywordsDataIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:125289

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IKeywordsDataIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:125308

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IKeywordsDataIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:125294

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`limit`](../interfaces/IKeywordsDataIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:125299

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`offset`](../interfaces/IKeywordsDataIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:125304

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`sort`](../interfaces/IKeywordsDataIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125321

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125343

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

Defined in: main.ts:125336

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)
