[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataIdListRequestInfo

# Class: BusinessDataIdListRequestInfo

## Implements

- [`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](BusinessDataIdListRequestInfo.md#datetime_from)
- [datetime\_to](BusinessDataIdListRequestInfo.md#datetime_to)
- [include\_metadata](BusinessDataIdListRequestInfo.md#include_metadata)
- [limit](BusinessDataIdListRequestInfo.md#limit)
- [offset](BusinessDataIdListRequestInfo.md#offset)
- [sort](BusinessDataIdListRequestInfo.md#sort)

### Methods

- [init](BusinessDataIdListRequestInfo.md#init)
- [toJSON](BusinessDataIdListRequestInfo.md#tojson)
- [fromJS](BusinessDataIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataIdListRequestInfo**(`data?`): [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md) |

#### Returns

[`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Defined in

main.ts:187300

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

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[datetime_from](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:187270

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

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[datetime_to](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:187277

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[include_metadata](../interfaces/IBusinessDataIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:187296

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[limit](../interfaces/IBusinessDataIdListRequestInfo.md#limit)

#### Defined in

main.ts:187282

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[offset](../interfaces/IBusinessDataIdListRequestInfo.md#offset)

#### Defined in

main.ts:187287

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IBusinessDataIdListRequestInfo](../interfaces/IBusinessDataIdListRequestInfo.md).[sort](../interfaces/IBusinessDataIdListRequestInfo.md#sort)

#### Defined in

main.ts:187292

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

main.ts:187309

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

main.ts:187331

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)

#### Defined in

main.ts:187324
