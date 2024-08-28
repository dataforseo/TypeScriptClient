[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / VideoSerpElementItem

# Class: VideoSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoSerpElementItem()

> **new VideoSerpElementItem**(`data`?): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

• **data?**: [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31975

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`VideoElement`](VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`items`](../interfaces/IVideoSerpElementItem.md#items)

#### Defined in

main.ts:31967

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`position`](../interfaces/IVideoSerpElementItem.md#position)

#### Defined in

main.ts:31962

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31958

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_group`](../interfaces/IVideoSerpElementItem.md#rank_group)

#### Defined in

main.ts:31954

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rectangle`](../interfaces/IVideoSerpElementItem.md#rectangle)

#### Defined in

main.ts:31971

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`xpath`](../interfaces/IVideoSerpElementItem.md#xpath)

#### Defined in

main.ts:31964

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

main.ts:31980

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

main.ts:32007

***

### fromJS()

> `static` **fromJS**(`data`): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32000
