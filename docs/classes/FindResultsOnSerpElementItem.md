[**Documentation**](../README.md) • **Docs**

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

### new FindResultsOnSerpElementItem()

> **new FindResultsOnSerpElementItem**(`data`?): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

• **data?**: [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:34587

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`items`](../interfaces/IFindResultsOnSerpElementItem.md#items)

#### Defined in

main.ts:34579

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`position`](../interfaces/IFindResultsOnSerpElementItem.md#position)

#### Defined in

main.ts:34574

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34570

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

#### Defined in

main.ts:34566

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rectangle`](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

#### Defined in

main.ts:34583

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

#### Defined in

main.ts:34576

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

main.ts:34592

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

main.ts:34619

***

### fromJS()

> `static` **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34612
