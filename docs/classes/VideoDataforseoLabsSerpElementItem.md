[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / VideoDataforseoLabsSerpElementItem

# Class: VideoDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoDataforseoLabsSerpElementItem()

> **new VideoDataforseoLabsSerpElementItem**(`data`?): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97118

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### items?

> `optional` **items**: [`VideoElement`](VideoElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97114

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20738

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20734

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVideoDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20740

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:97123

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:97145

***

### fromJS()

> `static` **fromJS**(`data`): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97138
