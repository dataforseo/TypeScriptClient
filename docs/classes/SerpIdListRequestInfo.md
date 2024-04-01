[Documentation](../README.md) / [Exports](../modules.md) / SerpIdListRequestInfo

# Class: SerpIdListRequestInfo

## Implements

- [`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](SerpIdListRequestInfo.md#datetime_from)
- [datetime\_to](SerpIdListRequestInfo.md#datetime_to)
- [include\_metadata](SerpIdListRequestInfo.md#include_metadata)
- [limit](SerpIdListRequestInfo.md#limit)
- [offset](SerpIdListRequestInfo.md#offset)
- [sort](SerpIdListRequestInfo.md#sort)

### Methods

- [init](SerpIdListRequestInfo.md#init)
- [toJSON](SerpIdListRequestInfo.md#tojson)
- [fromJS](SerpIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpIdListRequestInfo**(`data?`): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpIdListRequestInfo`](../interfaces/ISerpIdListRequestInfo.md) |

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Defined in

main.ts:23265

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

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[datetime_from](../interfaces/ISerpIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:23235

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

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[datetime_to](../interfaces/ISerpIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:23242

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[include_metadata](../interfaces/ISerpIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:23261

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[limit](../interfaces/ISerpIdListRequestInfo.md#limit)

#### Defined in

main.ts:23247

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[offset](../interfaces/ISerpIdListRequestInfo.md#offset)

#### Defined in

main.ts:23252

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[ISerpIdListRequestInfo](../interfaces/ISerpIdListRequestInfo.md).[sort](../interfaces/ISerpIdListRequestInfo.md#sort)

#### Defined in

main.ts:23257

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

main.ts:23274

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

main.ts:23296

___

### fromJS

▸ **fromJS**(`data`): [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)

#### Defined in

main.ts:23289
