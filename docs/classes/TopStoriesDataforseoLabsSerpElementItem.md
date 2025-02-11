[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopStoriesDataforseoLabsSerpElementItem

# Class: TopStoriesDataforseoLabsSerpElementItem

Defined in: main.ts:106987

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TopStoriesDataforseoLabsSerpElementItem()

> **new TopStoriesDataforseoLabsSerpElementItem**(`data`?): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106993

#### Parameters

##### data?

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

Defined in: main.ts:106989

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106998

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:107020

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107013

#### Parameters

##### data

`any`

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
