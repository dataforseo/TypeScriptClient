**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FindResultsOnSerpElementItem

# Class: FindResultsOnSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FindResultsOnSerpElementItem(data)

> **new FindResultsOnSerpElementItem**(`data`?): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

• **data?**: [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:33621

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### items?

> **`optional`** **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`items`](../interfaces/IFindResultsOnSerpElementItem.md#items)

#### Source

main.ts:33613

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`position`](../interfaces/IFindResultsOnSerpElementItem.md#position)

#### Source

main.ts:33608

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

#### Source

main.ts:33604

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

#### Source

main.ts:33600

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rectangle`](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

#### Source

main.ts:33617

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

#### Source

main.ts:33610

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

main.ts:33626

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

main.ts:33653

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:33646
