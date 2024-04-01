[Documentation](../README.md) / [Exports](../modules.md) / MicrodataFieldsInfo

# Class: MicrodataFieldsInfo

## Implements

- [`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MicrodataFieldsInfo.md#constructor)

### Properties

- [fields](MicrodataFieldsInfo.md#fields)
- [name](MicrodataFieldsInfo.md#name)
- [test\_results](MicrodataFieldsInfo.md#test_results)
- [types](MicrodataFieldsInfo.md#types)
- [value](MicrodataFieldsInfo.md#value)

### Methods

- [init](MicrodataFieldsInfo.md#init)
- [toJSON](MicrodataFieldsInfo.md#tojson)
- [fromJS](MicrodataFieldsInfo.md#fromjs)

## Constructors

### constructor

• **new MicrodataFieldsInfo**(`data?`): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMicrodataFieldsInfo`](../interfaces/IMicrodataFieldsInfo.md) |

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Defined in

main.ts:156153

## Properties

### fields

• `Optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[IMicrodataFieldsInfo](../interfaces/IMicrodataFieldsInfo.md).[fields](../interfaces/IMicrodataFieldsInfo.md#fields)

#### Defined in

main.ts:156149

___

### name

• `Optional` **name**: `string`

field name
name of the data field

#### Implementation of

[IMicrodataFieldsInfo](../interfaces/IMicrodataFieldsInfo.md).[name](../interfaces/IMicrodataFieldsInfo.md#name)

#### Defined in

main.ts:156137

___

### test\_results

• `Optional` **test\_results**: [`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

#### Implementation of

[IMicrodataFieldsInfo](../interfaces/IMicrodataFieldsInfo.md).[test_results](../interfaces/IMicrodataFieldsInfo.md#test_results)

#### Defined in

main.ts:156146

___

### types

• `Optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[IMicrodataFieldsInfo](../interfaces/IMicrodataFieldsInfo.md).[types](../interfaces/IMicrodataFieldsInfo.md#types)

#### Defined in

main.ts:156140

___

### value

• `Optional` **value**: `string`

microdata value
microdata value specified on a target web page

#### Implementation of

[IMicrodataFieldsInfo](../interfaces/IMicrodataFieldsInfo.md).[value](../interfaces/IMicrodataFieldsInfo.md#value)

#### Defined in

main.ts:156143

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

main.ts:156162

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

main.ts:156191

___

### fromJS

▸ **fromJS**(`data`): [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)

#### Defined in

main.ts:156184
