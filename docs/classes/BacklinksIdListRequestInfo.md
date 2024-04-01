[Documentation](../README.md) / [Exports](../modules.md) / BacklinksIdListRequestInfo

# Class: BacklinksIdListRequestInfo

## Implements

- [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](BacklinksIdListRequestInfo.md#datetime_from)
- [datetime\_to](BacklinksIdListRequestInfo.md#datetime_to)
- [include\_metadata](BacklinksIdListRequestInfo.md#include_metadata)
- [limit](BacklinksIdListRequestInfo.md#limit)
- [offset](BacklinksIdListRequestInfo.md#offset)
- [sort](BacklinksIdListRequestInfo.md#sort)

### Methods

- [init](BacklinksIdListRequestInfo.md#init)
- [toJSON](BacklinksIdListRequestInfo.md#tojson)
- [fromJS](BacklinksIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksIdListRequestInfo**(`data?`): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md) |

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Defined in

main.ts:133344

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

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[datetime_from](../interfaces/IBacklinksIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:133314

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

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[datetime_to](../interfaces/IBacklinksIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:133321

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[include_metadata](../interfaces/IBacklinksIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:133340

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[limit](../interfaces/IBacklinksIdListRequestInfo.md#limit)

#### Defined in

main.ts:133326

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[offset](../interfaces/IBacklinksIdListRequestInfo.md#offset)

#### Defined in

main.ts:133331

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IBacklinksIdListRequestInfo](../interfaces/IBacklinksIdListRequestInfo.md).[sort](../interfaces/IBacklinksIdListRequestInfo.md#sort)

#### Defined in

main.ts:133336

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

main.ts:133353

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

main.ts:133375

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)

#### Defined in

main.ts:133368
