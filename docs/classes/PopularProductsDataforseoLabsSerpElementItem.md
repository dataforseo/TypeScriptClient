**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PopularProductsDataforseoLabsSerpElementItem

# Class: PopularProductsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsDataforseoLabsSerpElementItem(data)

> **new PopularProductsDataforseoLabsSerpElementItem**(`data`?): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md)

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:100892

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20570

***

### items?

> **`optional`** **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:100888

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:100884

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:100880

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:100877

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPopularProductsDataforseoLabsSerpElementItem`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:100886

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:100897

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:100923

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:100916
