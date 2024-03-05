[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsIdListRequestInfo

# Class: DataforseoLabsIdListRequestInfo

## Implements

- [`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsIdListRequestInfo.md#constructor)

### Properties

- [datetime\_from](DataforseoLabsIdListRequestInfo.md#datetime_from)
- [datetime\_to](DataforseoLabsIdListRequestInfo.md#datetime_to)
- [include\_metadata](DataforseoLabsIdListRequestInfo.md#include_metadata)
- [limit](DataforseoLabsIdListRequestInfo.md#limit)
- [offset](DataforseoLabsIdListRequestInfo.md#offset)
- [sort](DataforseoLabsIdListRequestInfo.md#sort)

### Methods

- [init](DataforseoLabsIdListRequestInfo.md#init)
- [toJSON](DataforseoLabsIdListRequestInfo.md#tojson)
- [fromJS](DataforseoLabsIdListRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsIdListRequestInfo**(`data?`): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsIdListRequestInfo`](../interfaces/IDataforseoLabsIdListRequestInfo.md) |

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Defined in

[main.ts:76460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76460)

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

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[datetime_from](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_from)

#### Defined in

[main.ts:76430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76430)

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

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[datetime_to](../interfaces/IDataforseoLabsIdListRequestInfo.md#datetime_to)

#### Defined in

[main.ts:76437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76437)

___

### include\_metadata

• `Optional` **include\_metadata**: `boolean`

include task metadata in the respond
optional field
default value: false

#### Implementation of

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[include_metadata](../interfaces/IDataforseoLabsIdListRequestInfo.md#include_metadata)

#### Defined in

[main.ts:76456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76456)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[limit](../interfaces/IDataforseoLabsIdListRequestInfo.md#limit)

#### Defined in

[main.ts:76442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76442)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[offset](../interfaces/IDataforseoLabsIdListRequestInfo.md#offset)

#### Defined in

[main.ts:76447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76447)

___

### sort

• `Optional` **sort**: `string`

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[IDataforseoLabsIdListRequestInfo](../interfaces/IDataforseoLabsIdListRequestInfo.md).[sort](../interfaces/IDataforseoLabsIdListRequestInfo.md#sort)

#### Defined in

[main.ts:76452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76452)

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

[main.ts:76469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76469)

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

[main.ts:76491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76491)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)

#### Defined in

[main.ts:76484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76484)
