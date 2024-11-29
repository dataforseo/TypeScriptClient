[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopStoriesDataforseoLabsSerpElementItem

# Class: TopStoriesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopStoriesDataforseoLabsSerpElementItem()

> **new TopStoriesDataforseoLabsSerpElementItem**(`data`?): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:106793

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### items?

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:106789

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:106798

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:106820

***

### fromJS()

> `static` **fromJS**(`data`): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:106813
