**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new ShoppingSerpElementItem(data)

> **new ShoppingSerpElementItem**(`data`?): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

• **data?**: [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31582

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### items?

> **`optional`** **items**: [`ShoppingElement`](ShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`items`](../interfaces/IShoppingSerpElementItem.md#items)

#### Source

main.ts:31574

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`position`](../interfaces/IShoppingSerpElementItem.md#position)

#### Source

main.ts:31567

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_absolute`](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

#### Source

main.ts:31563

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rank_group`](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Source

main.ts:31559

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`rectangle`](../interfaces/IShoppingSerpElementItem.md#rectangle)

#### Source

main.ts:31578

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`title`](../interfaces/IShoppingSerpElementItem.md#title)

#### Source

main.ts:31571

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md).[`xpath`](../interfaces/IShoppingSerpElementItem.md#xpath)

#### Source

main.ts:31569

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:31587

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:31615

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31608
