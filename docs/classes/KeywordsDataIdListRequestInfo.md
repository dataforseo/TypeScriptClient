[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataIdListRequestInfo

# Class: KeywordsDataIdListRequestInfo

## Implements

- [`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListRequestInfo()

> **new KeywordsDataIdListRequestInfo**(`data`?): [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md)

#### Returns

[`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

#### Defined in

main.ts:118981

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IKeywordsDataIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:118951

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IKeywordsDataIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:118958

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IKeywordsDataIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:118977

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`limit`](../interfaces/IKeywordsDataIdListRequestInfo.md#limit)

#### Defined in

main.ts:118963

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`offset`](../interfaces/IKeywordsDataIdListRequestInfo.md#offset)

#### Defined in

main.ts:118968

***

### sort?

> `optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IKeywordsDataIdListRequestInfo`](../interfaces/IKeywordsDataIdListRequestInfo.md).[`sort`](../interfaces/IKeywordsDataIdListRequestInfo.md#sort)

#### Defined in

main.ts:118973

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:118990

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:119012

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)

#### Defined in

main.ts:119005
