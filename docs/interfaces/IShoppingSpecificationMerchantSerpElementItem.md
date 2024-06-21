**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IShoppingSpecificationMerchantSerpElementItem

# Interface: IShoppingSpecificationMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### block\_name?

> **`optional`** **block\_name**: `string`

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Source

main.ts:177013

***

### position?

> **`optional`** **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Source

main.ts:177008

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Source

main.ts:177004

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:177001

***

### specification\_name?

> **`optional`** **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Source

main.ts:177016

***

### specification\_value?

> **`optional`** **specification\_value**: `string`

content of the specification

#### Source

main.ts:177018

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:177010
