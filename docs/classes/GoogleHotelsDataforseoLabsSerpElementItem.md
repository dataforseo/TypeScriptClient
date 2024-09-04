[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleHotelsDataforseoLabsSerpElementItem

# Class: GoogleHotelsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleHotelsDataforseoLabsSerpElementItem()

> **new GoogleHotelsDataforseoLabsSerpElementItem**(`data`?): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99442

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)

#### Defined in

main.ts:99436

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#position)

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

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)

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

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:99438

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

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

main.ts:99447

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

main.ts:99466

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99459
