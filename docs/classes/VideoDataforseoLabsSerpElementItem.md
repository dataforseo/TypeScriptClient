**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / VideoDataforseoLabsSerpElementItem

# Class: VideoDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoDataforseoLabsSerpElementItem(data)

> **new VideoDataforseoLabsSerpElementItem**(`data`?): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:97674

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`VideoElement`](VideoElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:97670

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:97666

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:97662

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:97659

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:97668

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

main.ts:97679

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

main.ts:97705

***

### fromJS()

> **`static`** **fromJS**(`data`): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:97698
