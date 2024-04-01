[Documentation](../README.md) / [Exports](../modules.md) / BaseOnPageLinkItemInfo

# Class: BaseOnPageLinkItemInfo

## Hierarchy

- **`BaseOnPageLinkItemInfo`**

  ↳ [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

  ↳ [`ImageLinkElementItem`](ImageLinkElementItem.md)

  ↳ [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

  ↳ [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

## Implements

- [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseOnPageLinkItemInfo.md#constructor)

### Properties

- [\_discriminator](BaseOnPageLinkItemInfo.md#_discriminator)

### Methods

- [init](BaseOnPageLinkItemInfo.md#init)
- [toJSON](BaseOnPageLinkItemInfo.md#tojson)
- [fromJS](BaseOnPageLinkItemInfo.md#fromjs)

## Constructors

### constructor

• **new BaseOnPageLinkItemInfo**(`data?`): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md) |

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:20772

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:20770

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

main.ts:20782

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

main.ts:20818

___

### fromJS

▸ **fromJS**(`data`): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:20791
