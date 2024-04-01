[Documentation](../README.md) / [Exports](../modules.md) / MicrodataTestResultsInfo

# Class: MicrodataTestResultsInfo

## Implements

- [`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MicrodataTestResultsInfo.md#constructor)

### Properties

- [level](MicrodataTestResultsInfo.md#level)
- [message](MicrodataTestResultsInfo.md#message)

### Methods

- [init](MicrodataTestResultsInfo.md#init)
- [toJSON](MicrodataTestResultsInfo.md#tojson)
- [fromJS](MicrodataTestResultsInfo.md#fromjs)

## Constructors

### constructor

• **new MicrodataTestResultsInfo**(`data?`): [`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMicrodataTestResultsInfo`](../interfaces/IMicrodataTestResultsInfo.md) |

#### Returns

[`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Defined in

main.ts:156084

## Properties

### level

• `Optional` **level**: `string`

level of microdata error
can take the following values: fatal, error, warning, info

#### Implementation of

[IMicrodataTestResultsInfo](../interfaces/IMicrodataTestResultsInfo.md).[level](../interfaces/IMicrodataTestResultsInfo.md#level)

#### Defined in

main.ts:156077

___

### message

• `Optional` **message**: `string`

message associated with an error
message providing the details of the detected error

#### Implementation of

[IMicrodataTestResultsInfo](../interfaces/IMicrodataTestResultsInfo.md).[message](../interfaces/IMicrodataTestResultsInfo.md#message)

#### Defined in

main.ts:156080

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

main.ts:156093

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

main.ts:156111

___

### fromJS

▸ **fromJS**(`data`): [`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MicrodataTestResultsInfo`](MicrodataTestResultsInfo.md)

#### Defined in

main.ts:156104
