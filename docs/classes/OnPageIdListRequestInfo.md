[Documentation](../README.md) / [Exports](../modules.md) / OnPageIdListRequestInfo

# Class: OnPageIdListRequestInfo

## Implements

- [`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](OnPageIdListRequestInfo.md#datetime_from)
- [datetime\_to](OnPageIdListRequestInfo.md#datetime_to)
- [include\_metadata](OnPageIdListRequestInfo.md#include_metadata)
- [limit](OnPageIdListRequestInfo.md#limit)
- [offset](OnPageIdListRequestInfo.md#offset)
- [sort](OnPageIdListRequestInfo.md#sort)

### Methods

- [init](OnPageIdListRequestInfo.md#init)
- [toJSON](OnPageIdListRequestInfo.md#tojson)
- [fromJS](OnPageIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageIdListRequestInfo**(`data?`): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageIdListRequestInfo`](../interfaces/IOnPageIdListRequestInfo.md) |

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Defined in

main.ts:141617

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

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[datetime_from](../interfaces/IOnPageIdListRequestInfo.md#datetime_from)

#### Defined in

main.ts:141587

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

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[datetime_to](../interfaces/IOnPageIdListRequestInfo.md#datetime_to)

#### Defined in

main.ts:141594

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[include_metadata](../interfaces/IOnPageIdListRequestInfo.md#include_metadata)

#### Defined in

main.ts:141613

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[limit](../interfaces/IOnPageIdListRequestInfo.md#limit)

#### Defined in

main.ts:141599

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[offset](../interfaces/IOnPageIdListRequestInfo.md#offset)

#### Defined in

main.ts:141604

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IOnPageIdListRequestInfo](../interfaces/IOnPageIdListRequestInfo.md).[sort](../interfaces/IOnPageIdListRequestInfo.md#sort)

#### Defined in

main.ts:141609

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

main.ts:141626

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

main.ts:141648

___

### fromJS

▸ **fromJS**(`data`): [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)

#### Defined in

main.ts:141641
