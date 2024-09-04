[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleFlightsDataforseoLabsSerpElementItem

# Class: GoogleFlightsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleFlightsDataforseoLabsSerpElementItem()

> **new GoogleFlightsDataforseoLabsSerpElementItem**(`data`?): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98334

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### items?

> `optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98330

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#position)

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

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:98326

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:98328

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:98339

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

main.ts:98363

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98356
