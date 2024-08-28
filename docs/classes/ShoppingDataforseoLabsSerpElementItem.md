[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ShoppingDataforseoLabsSerpElementItem

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

main.ts:100807

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:100803

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:100796

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:100792

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:100789

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:100800

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShoppingDataforseoLabsSerpElementItem`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IShoppingDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:100798

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

main.ts:100812

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

main.ts:100839

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

main.ts:100832
