**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MapSerpElementItem

# Class: MapSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapSerpElementItem(data)

> **new MapSerpElementItem**(`data`?): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

• **data?**: [`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md)

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31090

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`position`](../interfaces/IMapSerpElementItem.md#position)

#### Source

main.ts:31076

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rank_absolute`](../interfaces/IMapSerpElementItem.md#rank_absolute)

#### Source

main.ts:31072

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rank_group`](../interfaces/IMapSerpElementItem.md#rank_group)

#### Source

main.ts:31068

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rectangle`](../interfaces/IMapSerpElementItem.md#rectangle)

#### Source

main.ts:31086

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`title`](../interfaces/IMapSerpElementItem.md#title)

#### Source

main.ts:31080

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`url`](../interfaces/IMapSerpElementItem.md#url)

#### Source

main.ts:31082

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`xpath`](../interfaces/IMapSerpElementItem.md#xpath)

#### Source

main.ts:31078

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

main.ts:31095

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

main.ts:31119

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31112
