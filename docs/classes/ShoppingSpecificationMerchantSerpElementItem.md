[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShoppingSpecificationMerchantSerpElementItem

# Class: ShoppingSpecificationMerchantSerpElementItem

Defined in: main.ts:189702

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ShoppingSpecificationMerchantSerpElementItem()

> **new ShoppingSpecificationMerchantSerpElementItem**(`data`?): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

Defined in: main.ts:189716

#### Parameters

##### data?

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md)

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21722

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### block\_name?

> `optional` **block\_name**: `string`

Defined in: main.ts:189707

name of the block of product attributes
indicates the name of the product specification section in which the related element is listed

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`block_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#block_name)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21720

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`position`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21716

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21713

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### specification\_name?

> `optional` **specification\_name**: `string`

Defined in: main.ts:189710

product attribute
attribute name of the product data specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_name`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_name)

***

### specification\_value?

> `optional` **specification\_value**: `string`

Defined in: main.ts:189712

content of the specification

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`specification_value`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#specification_value)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21710

type of element

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`type`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:189704

XPath of the element

#### Implementation of

[`IShoppingSpecificationMerchantSerpElementItem`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md).[`xpath`](../interfaces/IShoppingSpecificationMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:189721

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:189742

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

Defined in: main.ts:189735

#### Parameters

##### data

`any`

#### Returns

[`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
