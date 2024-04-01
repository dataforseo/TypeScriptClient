[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataContactInfo

# Class: BusinessDataContactInfo

## Implements

- [`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataContactInfo.md#constructor)

### Properties

- [source](BusinessDataContactInfo.md#source)
- [type](BusinessDataContactInfo.md#type)
- [value](BusinessDataContactInfo.md#value)

### Methods

- [init](BusinessDataContactInfo.md#init)
- [toJSON](BusinessDataContactInfo.md#tojson)
- [fromJS](BusinessDataContactInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataContactInfo**(`data?`): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md) |

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Defined in

main.ts:194397

## Properties

### source

• `Optional` **source**: `string`

data source

#### Implementation of

[IBusinessDataContactInfo](../interfaces/IBusinessDataContactInfo.md).[source](../interfaces/IBusinessDataContactInfo.md#source)

#### Defined in

main.ts:194393

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataContactInfo](../interfaces/IBusinessDataContactInfo.md).[type](../interfaces/IBusinessDataContactInfo.md#type)

#### Defined in

main.ts:194387

___

### value

• `Optional` **value**: `string`

contact displayed in SERP 
example:
"+119797979736"

#### Implementation of

[IBusinessDataContactInfo](../interfaces/IBusinessDataContactInfo.md).[value](../interfaces/IBusinessDataContactInfo.md#value)

#### Defined in

main.ts:194391

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

main.ts:194406

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

main.ts:194425

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Defined in

main.ts:194418
