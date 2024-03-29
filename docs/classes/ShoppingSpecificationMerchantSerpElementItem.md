[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ShoppingSpecificationMerchantSerpElementItem

# Class: ShoppingSpecificationMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`ShoppingSpecificationMerchantSerpElementItem`**

## Implements

- [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShoppingSpecificationMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ShoppingSpecificationMerchantSerpElementItem.md#_discriminator)
- [block\_name](ShoppingSpecificationMerchantSerpElementItem.md#block_name)
- [position](ShoppingSpecificationMerchantSerpElementItem.md#position)
- [rank\_absolute](ShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](ShoppingSpecificationMerchantSerpElementItem.md#rank_group)
- [specification\_name](ShoppingSpecificationMerchantSerpElementItem.md#specification_name)
- [specification\_value](ShoppingSpecificationMerchantSerpElementItem.md#specification_value)
- [xpath](ShoppingSpecificationMerchantSerpElementItem.md#xpath)

### Methods

- [init](ShoppingSpecificationMerchantSerpElementItem.md#init)
- [toJSON](ShoppingSpecificationMerchantSerpElementItem.md#tojson)
- [fromJS](ShoppingSpecificationMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ShoppingSpecificationMerchantSerpElementItem**(`data?`): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md) |

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:167857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167857)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### block\_name

• `Optional` **block\_name**: `string`

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[block_name](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#block_name)

#### Defined in

[main.ts:167848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167848)

___


### position

• `Optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[position](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:167843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167843)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[rank_absolute](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:167839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167839)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[rank_group](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:167836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167836)

___


### specification\_name

• `Optional` **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[specification_name](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_name)

#### Defined in

[main.ts:167851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167851)

___


### specification\_value

• `Optional` **specification\_value**: `string`

content of the specification

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[specification_value](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_value)

#### Defined in

[main.ts:167853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167853)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IShoppingSpecificationMerchantSerpElementItem](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[xpath](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#xpath)

#### Defined in

[main.ts:167845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167845)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[init](BaseMerchantSerpElementItem.md#init)

#### Defined in

[main.ts:167862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167862)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[toJSON](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

[main.ts:167886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167886)

___


### fromJS

▸ **fromJS**(`data`): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:167879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167879)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")