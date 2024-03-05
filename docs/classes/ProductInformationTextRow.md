[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

## Hierarchy

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

  ↳ **`ProductInformationTextRow`**

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationTextRow.md#constructor)

### Properties

- [\_discriminator](ProductInformationTextRow.md#_discriminator)
- [text](ProductInformationTextRow.md#text)

### Methods

- [init](ProductInformationTextRow.md#init)
- [toJSON](ProductInformationTextRow.md#tojson)
- [fromJS](ProductInformationTextRow.md#fromjs)

## Constructors

### constructor

• **new ProductInformationTextRow**(`data?`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md) |

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[constructor](BaseProductInformationRowItem.md#constructor)

#### Defined in

[main.ts:172614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172614)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[_discriminator](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

[main.ts:21778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21778)

___

### text

• `Optional` **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[IProductInformationTextRow](../interfaces/IProductInformationTextRow.md).[text](../interfaces/IProductInformationTextRow.md#text)

#### Defined in

[main.ts:172610](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172610)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[init](BaseProductInformationRowItem.md#init)

#### Defined in

[main.ts:172619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172619)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[toJSON](BaseProductInformationRowItem.md#tojson)

#### Defined in

[main.ts:172637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172637)

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[fromJS](BaseProductInformationRowItem.md#fromjs)

#### Defined in

[main.ts:172630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172630)
