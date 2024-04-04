**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisIdListRequestInfo

# Class: ContentAnalysisIdListRequestInfo

## Implements

- [`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListRequestInfo(data)

> **new ContentAnalysisIdListRequestInfo**(`data`?): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md)

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Source

main.ts:160478

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

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`datetime_from`](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_from)

#### Source

main.ts:160448

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

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`datetime_to`](../interfaces/IContentAnalysisIdListRequestInfo.md#datetime_to)

#### Source

main.ts:160455

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`include_metadata`](../interfaces/IContentAnalysisIdListRequestInfo.md#include_metadata)

#### Source

main.ts:160474

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`limit`](../interfaces/IContentAnalysisIdListRequestInfo.md#limit)

#### Source

main.ts:160460

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`offset`](../interfaces/IContentAnalysisIdListRequestInfo.md#offset)

#### Source

main.ts:160465

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IContentAnalysisIdListRequestInfo`](../interfaces/IContentAnalysisIdListRequestInfo.md).[`sort`](../interfaces/IContentAnalysisIdListRequestInfo.md#sort)

#### Source

main.ts:160470

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160487

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160509

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)

#### Source

main.ts:160502
