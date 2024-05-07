**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RelatedSearchesSerpElementItem

# Class: RelatedSearchesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesSerpElementItem(data)

> **new RelatedSearchesSerpElementItem**(`data`?): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

• **data?**: [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:32303

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesSerpElementItem.md#items)

#### Source

main.ts:32295

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesSerpElementItem.md#position)

#### Source

main.ts:32290

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_absolute)

#### Source

main.ts:32286

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_group)

#### Source

main.ts:32282

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IRelatedSearchesSerpElementItem.md#rectangle)

#### Source

main.ts:32299

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesSerpElementItem.md#xpath)

#### Source

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

#### Source

main.ts:32308

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

main.ts:32335

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:32328
