[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ShoppingSerpElementItem

# Class: ShoppingSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShoppingSerpElementItem()

> **new ShoppingSerpElementItem**(`data`?): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

• **data?**: [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32305

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`items`](../interfaces/IShoppingSerpElementItem.md#items)

#### Defined in

main.ts:32297

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`position`](../interfaces/IShoppingSerpElementItem.md#position)

#### Defined in

main.ts:32290

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32286

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Defined in

main.ts:32282

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rectangle`](../interfaces/IShoppingSerpElementItem.md#rectangle)

#### Defined in

main.ts:32301

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`title`](../interfaces/IShoppingSerpElementItem.md#title)

#### Defined in

main.ts:32294

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`xpath`](../interfaces/IShoppingSerpElementItem.md#xpath)

#### Defined in

main.ts:32292

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32310

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32338

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32331
