[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataAttributesInfo.md#constructor)

### Properties

- [available\_attributes](BusinessDataAttributesInfo.md#available_attributes)
- [unavailable\_attributes](BusinessDataAttributesInfo.md#unavailable_attributes)

### Methods

- [init](BusinessDataAttributesInfo.md#init)
- [toJSON](BusinessDataAttributesInfo.md#tojson)
- [fromJS](BusinessDataAttributesInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataAttributesInfo**(`data?`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md) |

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

[main.ts:188604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188604)

## Properties

### available\_attributes

• `Optional` **available\_attributes**: `Object`

available attributes
indicates attributes a business entity can offer

#### Index signature

▪ [key: `string`]: (`string` \| `undefined`)[]

#### Implementation of

[IBusinessDataAttributesInfo](../interfaces/IBusinessDataAttributesInfo.md).[available_attributes](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

#### Defined in

[main.ts:188597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188597)

___


### unavailable\_attributes

• `Optional` **unavailable\_attributes**: `Object`

unavailable attributes
indicates attributes a business entity cannot offer

#### Index signature

▪ [key: `string`]: (`string` \| `undefined`)[]

#### Implementation of

[IBusinessDataAttributesInfo](../interfaces/IBusinessDataAttributesInfo.md).[unavailable_attributes](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

#### Defined in

[main.ts:188600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188600)

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

[main.ts:188613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188613)

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

[main.ts:188643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188643)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

[main.ts:188636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188636)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")