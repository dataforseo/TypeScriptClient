**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductConsiderationsSerpElementItem

# Class: ProductConsiderationsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsSerpElementItem(data)

> **new ProductConsiderationsSerpElementItem**(`data`?): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

• **data?**: [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35585

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### items?

> **`optional`** **items**: [`ProductConsiderationsElement`](ProductConsiderationsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`items`](../interfaces/IProductConsiderationsSerpElementItem.md#items)

#### Source

main.ts:35577

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`position`](../interfaces/IProductConsiderationsSerpElementItem.md#position)

#### Source

main.ts:35570

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_absolute`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_absolute)

#### Source

main.ts:35566

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_group`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_group)

#### Source

main.ts:35562

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rectangle`](../interfaces/IProductConsiderationsSerpElementItem.md#rectangle)

#### Source

main.ts:35581

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`title`](../interfaces/IProductConsiderationsSerpElementItem.md#title)

#### Source

main.ts:35574

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`xpath`](../interfaces/IProductConsiderationsSerpElementItem.md#xpath)

#### Source

main.ts:35572

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

main.ts:35590

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

main.ts:35618

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35611
