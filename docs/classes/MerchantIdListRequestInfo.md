[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantIdListRequestInfo

# Class: MerchantIdListRequestInfo

## Implements

- [`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantIdListRequestInfo()

> **new MerchantIdListRequestInfo**(`data`?): [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md)

#### Returns

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Defined in

main.ts:176426

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

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`datetime_from`](../interfaces/IMerchantIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:176396

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

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`datetime_to`](../interfaces/IMerchantIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:176403

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`include_metadata`](../interfaces/IMerchantIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:176422

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`limit`](../interfaces/IMerchantIdListRequestInfo.md#limit)

#### Defined in

main.ts:176408

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`offset`](../interfaces/IMerchantIdListRequestInfo.md#offset)

#### Defined in

main.ts:176413

***

### sort?

> `optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`sort`](../interfaces/IMerchantIdListRequestInfo.md#sort)

#### Defined in

main.ts:176418

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:176435

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:176457

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Defined in

main.ts:176450
