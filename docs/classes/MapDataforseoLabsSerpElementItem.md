[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MapDataforseoLabsSerpElementItem

# Class: MapDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapDataforseoLabsSerpElementItem()

> **new MapDataforseoLabsSerpElementItem**(`data`?): [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md)

#### Returns

[`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99124

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMapDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:99114

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:99110

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:99107

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMapDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:99118

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IMapDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:99120

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMapDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:99116

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

main.ts:99129

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

main.ts:99152

***

### fromJS()

> `static` **fromJS**(`data`): [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99145
