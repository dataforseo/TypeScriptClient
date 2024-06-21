**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopStoriesSerpElementItem

# Class: TopStoriesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopStoriesSerpElementItem(data)

> **new TopStoriesSerpElementItem**(`data`?): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

• **data?**: [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:29488

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### items?

> **`optional`** **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`items`](../interfaces/ITopStoriesSerpElementItem.md#items)

#### Source

main.ts:29480

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`position`](../interfaces/ITopStoriesSerpElementItem.md#position)

#### Source

main.ts:29473

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesSerpElementItem.md#rank_absolute)

#### Source

main.ts:29469

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesSerpElementItem.md#rank_group)

#### Source

main.ts:29465

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rectangle`](../interfaces/ITopStoriesSerpElementItem.md#rectangle)

#### Source

main.ts:29484

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`title`](../interfaces/ITopStoriesSerpElementItem.md#title)

#### Source

main.ts:29477

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesSerpElementItem.md#xpath)

#### Source

main.ts:29475

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

main.ts:29493

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

main.ts:29521

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:29514
