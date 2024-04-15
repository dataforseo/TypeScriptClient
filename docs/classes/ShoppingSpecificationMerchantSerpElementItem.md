**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new ShoppingSpecificationMerchantSerpElementItem(data)

> **new ShoppingSpecificationMerchantSerpElementItem**(`data`?): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:173460

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20444

***

### block\_name?

> **`optional`** **block\_name**: `string`

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`block_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#block_name)

#### Source

main.ts:173451

***

### position?

> **`optional`** **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`position`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#position)

#### Source

main.ts:173446

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:173442

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:173439

***

### specification\_name?

> **`optional`** **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_name)

#### Source

main.ts:173454

***

### specification\_value?

> **`optional`** **specification\_value**: `string`

content of the specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_value`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_value)

#### Source

main.ts:173456

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`xpath`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#xpath)

#### Source

main.ts:173448

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Source

main.ts:173465

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Source

main.ts:173489

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:173482
