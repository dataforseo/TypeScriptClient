[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopSightsDataforseoLabsSerpElementItem

# Class: TopSightsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsDataforseoLabsSerpElementItem()

> **new TopSightsDataforseoLabsSerpElementItem**(`data`?): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101293

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101289

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101282

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101278

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101275

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:101286

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101284

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

main.ts:101298

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

main.ts:101325

***

### fromJS()

> `static` **fromJS**(`data`): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101318
