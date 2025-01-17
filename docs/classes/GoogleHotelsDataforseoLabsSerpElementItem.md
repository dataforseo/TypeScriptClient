[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleHotelsDataforseoLabsSerpElementItem

# Class: GoogleHotelsDataforseoLabsSerpElementItem

Defined in: main.ts:109269

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleHotelsDataforseoLabsSerpElementItem()

> **new GoogleHotelsDataforseoLabsSerpElementItem**(`data`?): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:109279

#### Parameters

##### data?

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:109273

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:109275

relevant URL of the Ad element in SERP

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109284

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:109303

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:109296

#### Parameters

##### data

`any`

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
