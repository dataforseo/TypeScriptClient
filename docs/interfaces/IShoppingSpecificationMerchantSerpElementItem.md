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

main.ts:174380

***

### position?

> **`optional`** **position**: `string`

alignment of the element on the product specification page
can take the following values:
right

#### Source

main.ts:174375

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Source

main.ts:174371

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:174368

***

### specification\_name?

> **`optional`** **specification\_name**: `string`

product attribute
attribute name of the product data specification

#### Source

main.ts:174383

***

### specification\_value?

> **`optional`** **specification\_value**: `string`

content of the specification

#### Source

main.ts:174385

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:174377
