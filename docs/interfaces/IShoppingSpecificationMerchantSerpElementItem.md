[**Documentation**](../README.md)

***

[Documentation](../README.md) / IShoppingSpecificationMerchantSerpElementItem

# Interface: IShoppingSpecificationMerchantSerpElementItem

Defined in: main.ts:189757

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### block\_name?

> `optional` **block\_name**: `string`

Defined in: main.ts:189762

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21813

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21809

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21806

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

***

### specification\_name?

> `optional` **specification\_name**: `string`

Defined in: main.ts:189765

product attribute
attribute name of the product data specification

***

### specification\_value?

> `optional` **specification\_value**: `string`

Defined in: main.ts:189767

content of the specification

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21803

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:189759

XPath of the element
