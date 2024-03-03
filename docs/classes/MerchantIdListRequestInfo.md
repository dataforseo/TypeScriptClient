[Documentation](../README.md) / [Exports](../modules.md) / MerchantIdListRequestInfo

# Class: MerchantIdListRequestInfo

## Implements

- [`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](MerchantIdListRequestInfo.md#datetime_from)
- [datetime\_to](MerchantIdListRequestInfo.md#datetime_to)
- [include\_metadata](MerchantIdListRequestInfo.md#include_metadata)
- [limit](MerchantIdListRequestInfo.md#limit)
- [offset](MerchantIdListRequestInfo.md#offset)
- [sort](MerchantIdListRequestInfo.md#sort)

### Methods

- [init](MerchantIdListRequestInfo.md#init)
- [toJSON](MerchantIdListRequestInfo.md#tojson)
- [fromJS](MerchantIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantIdListRequestInfo**(`data?`): [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md) |

#### Returns

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Defined in

main.ts:162809

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

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[datetime_from](../interfaces/IMerchantIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:162779

___

### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[datetime_to](../interfaces/IMerchantIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:162786

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[include_metadata](../interfaces/IMerchantIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:162805

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[limit](../interfaces/IMerchantIdListRequestInfo.md#limit)

#### Defined in

main.ts:162791

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[offset](../interfaces/IMerchantIdListRequestInfo.md#offset)

#### Defined in

main.ts:162796

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IMerchantIdListRequestInfo](../interfaces/IMerchantIdListRequestInfo.md).[sort](../interfaces/IMerchantIdListRequestInfo.md#sort)

#### Defined in

main.ts:162801

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:162818

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:162840

___

### fromJS

▸ **fromJS**(`data`): [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)

#### Defined in

main.ts:162833
