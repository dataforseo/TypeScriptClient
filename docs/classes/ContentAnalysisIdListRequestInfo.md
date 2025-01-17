[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisIdListRequestInfo

# Class: ContentAnalysisIdListRequestInfo

Defined in: main.ts:176354

## Implements

- [`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListRequestInfo()

> **new ContentAnalysisIdListRequestInfo**(`data`?): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

Defined in: main.ts:176392

#### Parameters

##### data?

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md)

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:176362

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`datetime_from`](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:176369

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`datetime_to`](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:176388

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`include_metadata`](../interfaces/IContentAnalysisIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:176374

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`limit`](../interfaces/IContentAnalysisIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:176379

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`offset`](../interfaces/IContentAnalysisIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:176384

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`sort`](../interfaces/IContentAnalysisIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176401

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:176423

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

Defined in: main.ts:176416

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)
