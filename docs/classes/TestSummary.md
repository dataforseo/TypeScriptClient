[Documentation](../README.md) / [Exports](../modules.md) / TestSummary

# Class: TestSummary

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TestSummary.md#constructor)

### Properties

- [error](TestSummary.md#error)
- [fatal](TestSummary.md#fatal)
- [info](TestSummary.md#info)
- [warning](TestSummary.md#warning)

### Methods

- [init](TestSummary.md#init)
- [toJSON](TestSummary.md#tojson)
- [fromJS](TestSummary.md#fromjs)

## Constructors

### constructor

• **new TestSummary**(`data?`): [`TestSummary`](TestSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITestSummary`](../interfaces/ITestSummary.md) |

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:156018

## Properties

### error

• `Optional` **error**: `number`

number of serious microdata errors

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[error](../interfaces/ITestSummary.md#error)

#### Defined in

main.ts:156010

___

### fatal

• `Optional` **fatal**: `number`

number of fatal microdata errors

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[fatal](../interfaces/ITestSummary.md#fatal)

#### Defined in

main.ts:156008

___

### info

• `Optional` **info**: `number`

number of microdata information flags

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[info](../interfaces/ITestSummary.md#info)

#### Defined in

main.ts:156014

___

### warning

• `Optional` **warning**: `number`

number of microdata warnings

#### Implementation of

[ITestSummary](../interfaces/ITestSummary.md).[warning](../interfaces/ITestSummary.md#warning)

#### Defined in

main.ts:156012

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

main.ts:156027

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

main.ts:156047

___

### fromJS

▸ **fromJS**(`data`): [`TestSummary`](TestSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TestSummary`](TestSummary.md)

#### Defined in

main.ts:156040
