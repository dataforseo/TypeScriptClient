[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationImageRow

# Class: ProductInformationImageRow

## Hierarchy

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)
  
  ↳ **`ProductInformationImageRow`**

## Implements

- [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationImageRow.md#constructor)

### Properties

- [\_discriminator](ProductInformationImageRow.md#_discriminator)
- [alt](ProductInformationImageRow.md#alt)
- [url](ProductInformationImageRow.md#url)

### Methods

- [init](ProductInformationImageRow.md#init)
- [toJSON](ProductInformationImageRow.md#tojson)
- [fromJS](ProductInformationImageRow.md#fromjs)

## Constructors

### constructor

• **new ProductInformationImageRow**(`data?`): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md) |

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[constructor](BaseProductInformationRowItem.md#constructor)

#### Defined in

[main.ts:172562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172562)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[_discriminator](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

[main.ts:21778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21778)

___


### alt

• `Optional` **alt**: `string`

alternative text of the related product image

#### Implementation of

[IProductInformationImageRow](../interfaces/IProductInformationImageRow.md).[alt](../interfaces/IProductInformationImageRow.md#alt)

#### Defined in

[main.ts:172556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172556)

___


### url

• `Optional` **url**: `string`

URL of the image

#### Implementation of

[IProductInformationImageRow](../interfaces/IProductInformationImageRow.md).[url](../interfaces/IProductInformationImageRow.md#url)

#### Defined in

[main.ts:172558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172558)

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

[main.ts:172567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172567)

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

[main.ts:172586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172586)

___


### fromJS

▸ **fromJS**(`data`): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[fromJS](BaseProductInformationRowItem.md#fromjs)

#### Defined in

[main.ts:172579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172579)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")