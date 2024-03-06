[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

## Hierarchy

- [`BaseProductInformationItem`](BaseProductInformationItem.md)
  
  ↳ **`ProductInformationTextItem`**

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationTextItem.md#constructor)

### Properties

- [\_discriminator](ProductInformationTextItem.md#_discriminator)
- [section\_name](ProductInformationTextItem.md#section_name)
- [text](ProductInformationTextItem.md#text)

### Methods

- [init](ProductInformationTextItem.md#init)
- [toJSON](ProductInformationTextItem.md#tojson)
- [fromJS](ProductInformationTextItem.md#fromjs)

## Constructors

### constructor

• **new ProductInformationTextItem**(`data?`): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md) |

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[constructor](BaseProductInformationItem.md#constructor)

#### Defined in

[main.ts:172508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172508)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationItem](BaseProductInformationItem.md).[_discriminator](BaseProductInformationItem.md#_discriminator)

#### Defined in

[main.ts:21715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21715)

___


### section\_name

• `Optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[IProductInformationTextItem](../interfaces/IProductInformationTextItem.md).[section_name](../interfaces/IProductInformationTextItem.md#section_name)

#### Defined in

[main.ts:172502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172502)

___


### text

• `Optional` **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[IProductInformationTextItem](../interfaces/IProductInformationTextItem.md).[text](../interfaces/IProductInformationTextItem.md#text)

#### Defined in

[main.ts:172504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172504)

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

[BaseProductInformationItem](BaseProductInformationItem.md).[init](BaseProductInformationItem.md#init)

#### Defined in

[main.ts:172513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172513)

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

[BaseProductInformationItem](BaseProductInformationItem.md).[toJSON](BaseProductInformationItem.md#tojson)

#### Defined in

[main.ts:172532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172532)

___


### fromJS

▸ **fromJS**(`data`): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[fromJS](BaseProductInformationItem.md#fromjs)

#### Defined in

[main.ts:172525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172525)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")