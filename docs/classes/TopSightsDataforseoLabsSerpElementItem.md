**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopSightsDataforseoLabsSerpElementItem

# Class: TopSightsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsDataforseoLabsSerpElementItem(data)

> **new TopSightsDataforseoLabsSerpElementItem**(`data`?): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:98590

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### items?

> **`optional`** **items**: [`TopSightsElement`](TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:98586

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:98579

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:98575

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:98572

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:98583

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:98581

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

main.ts:98595

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

main.ts:98622

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98615
