[Documentation](../README.md) / [Exports](../modules.md) / IMerchantIdListRequestInfo

# Interface: IMerchantIdListRequestInfo

## Implemented by

- [`MerchantIdListRequestInfo`](../classes/MerchantIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [datetime\_from](IMerchantIdListRequestInfo.md#datetime_from)
- [datetime\_to](IMerchantIdListRequestInfo.md#datetime_to)
- [include\_metadata](IMerchantIdListRequestInfo.md#include_metadata)
- [limit](IMerchantIdListRequestInfo.md#limit)
- [offset](IMerchantIdListRequestInfo.md#offset)
- [sort](IMerchantIdListRequestInfo.md#sort)

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Defined in

main.ts:162864

___

### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Defined in

main.ts:162871

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Defined in

main.ts:162890

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Defined in

main.ts:162876

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Defined in

main.ts:162881

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Defined in

main.ts:162886
