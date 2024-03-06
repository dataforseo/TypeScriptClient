[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationVideoRow

# Class: ProductInformationVideoRow

## Hierarchy

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)
  
  ↳ **`ProductInformationVideoRow`**

## Implements

- [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationVideoRow.md#constructor)

### Properties

- [\_discriminator](ProductInformationVideoRow.md#_discriminator)
- [preview](ProductInformationVideoRow.md#preview)
- [url](ProductInformationVideoRow.md#url)

### Methods

- [init](ProductInformationVideoRow.md#init)
- [toJSON](ProductInformationVideoRow.md#tojson)
- [fromJS](ProductInformationVideoRow.md#fromjs)

## Constructors

### constructor

• **new ProductInformationVideoRow**(`data?`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md) |

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[constructor](BaseProductInformationRowItem.md#constructor)

#### Defined in

[main.ts:173239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173239)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[_discriminator](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

[main.ts:21778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21778)

___


### preview

• `Optional` **preview**: `string`

URL of the preview image for the related video

#### Implementation of

[IProductInformationVideoRow](../interfaces/IProductInformationVideoRow.md).[preview](../interfaces/IProductInformationVideoRow.md#preview)

#### Defined in

[main.ts:173233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173233)

___


### url

• `Optional` **url**: `string`

URL of the image

#### Implementation of

[IProductInformationVideoRow](../interfaces/IProductInformationVideoRow.md).[url](../interfaces/IProductInformationVideoRow.md#url)

#### Defined in

[main.ts:173235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173235)

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

[main.ts:173244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173244)

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

[main.ts:173263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173263)

___


### fromJS

▸ **fromJS**(`data`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[fromJS](BaseProductInformationRowItem.md#fromjs)

#### Defined in

[main.ts:173256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173256)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")