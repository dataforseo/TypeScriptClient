[Documentation](../README.md) / [Exports](../modules.md) / IShoppingSpecificationMerchantSerpElementItem

# Interface: IShoppingSpecificationMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IShoppingSpecificationMerchantSerpElementItem`**

## Implemented by

- [`ShoppingSpecificationMerchantSerpElementItem`](../classes/ShoppingSpecificationMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [block\_name](IShoppingSpecificationMerchantSerpElementItem.md#block_name)
- [position](IShoppingSpecificationMerchantSerpElementItem.md#position)
- [rank\_absolute](IShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IShoppingSpecificationMerchantSerpElementItem.md#rank_group)
- [specification\_name](IShoppingSpecificationMerchantSerpElementItem.md#specification_name)
- [specification\_value](IShoppingSpecificationMerchantSerpElementItem.md#specification_value)
- [xpath](IShoppingSpecificationMerchantSerpElementItem.md#xpath)

## Properties

### block\_name

• `Optional` **block\_name**: `string`

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Defined in

main.ts:173372

___

### position

• `Optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Defined in

main.ts:173367

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Defined in

main.ts:173363

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:173360

___

### specification\_name

• `Optional` **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Defined in

main.ts:173375

___

### specification\_value

• `Optional` **specification\_value**: `string`

content of the specification

#### Defined in

main.ts:173377

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:173369
