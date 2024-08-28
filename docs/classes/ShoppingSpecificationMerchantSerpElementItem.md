[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ShoppingSpecificationMerchantSerpElementItem

# Class: ShoppingSpecificationMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShoppingSpecificationMerchantSerpElementItem()

> **new ShoppingSpecificationMerchantSerpElementItem**(`data`?): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:181724

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21025

***

### block\_name?

> `optional` **block\_name**: `string`

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`block_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#block_name)

#### Defined in

main.ts:181715

***

### position?

> `optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`position`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#position)

#### Defined in

main.ts:181710

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:181706

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:181703

***

### specification\_name?

> `optional` **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_name)

#### Defined in

main.ts:181718

***

### specification\_value?

> `optional` **specification\_value**: `string`

content of the specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_value`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_value)

#### Defined in

main.ts:181720

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`xpath`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:181712

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:181729

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:181753

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:181746
