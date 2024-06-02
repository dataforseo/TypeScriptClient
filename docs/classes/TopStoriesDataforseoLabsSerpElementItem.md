**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new TopStoriesDataforseoLabsSerpElementItem(data)

> **new TopStoriesDataforseoLabsSerpElementItem**(`data`?): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md)

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:96274

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### items?

> **`optional`** **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

elements of search results found in SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:96270

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:96266

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:96262

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:96259

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopStoriesDataforseoLabsSerpElementItem`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:96268

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:96279

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:96305

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:96298
