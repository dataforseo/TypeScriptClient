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

main.ts:102272

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)

#### Defined in

main.ts:102266

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:102260

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:102256

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:102253

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:102268

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:102262

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

main.ts:102277

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

main.ts:102300

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

main.ts:102293
