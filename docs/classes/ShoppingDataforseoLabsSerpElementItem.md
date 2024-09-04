[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ShoppingDataforseoLabsSerpElementItem

# Class: ShoppingDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShoppingDataforseoLabsSerpElementItem()

> **new ShoppingDataforseoLabsSerpElementItem**(`data`?): [`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md)

#### Returns

[`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98484

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### items?

> `optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98480

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20738

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20734

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:98478

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20740

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:98489

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:98512

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98505
