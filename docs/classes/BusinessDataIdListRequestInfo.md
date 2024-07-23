**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataIdListRequestInfo

# Class: BusinessDataIdListRequestInfo

## Implements

- [`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListRequestInfo(data)

> **new BusinessDataIdListRequestInfo**(`data`?): [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md)

#### Returns

[`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Source

main.ts:199751

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

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_from)

#### Source

main.ts:199721

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

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_to)

#### Source

main.ts:199728

***

### include\_metadata?

> **`optional`** **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IBusinessDataIdListRequestInfo.md#include_metadata)

#### Source

main.ts:199747

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`limit`](../interfaces/IBusinessDataIdListRequestInfo.md#limit)

#### Source

main.ts:199733

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`offset`](../interfaces/IBusinessDataIdListRequestInfo.md#offset)

#### Source

main.ts:199738

***

### sort?

> **`optional`** **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`sort`](../interfaces/IBusinessDataIdListRequestInfo.md#sort)

#### Source

main.ts:199743

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:199760

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:199782

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Source

main.ts:199775
