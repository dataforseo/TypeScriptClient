**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleHotelsSerpElementItem

# Class: GoogleHotelsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleHotelsSerpElementItem(data)

> **new GoogleHotelsSerpElementItem**(`data`?): [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

#### Returns

[`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35524

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`cid`](../interfaces/IGoogleHotelsSerpElementItem.md#cid)

#### Source

main.ts:35516

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsSerpElementItem.md#hotel_identifier)

#### Source

main.ts:35512

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsSerpElementItem.md#position)

#### Source

main.ts:35506

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_absolute)

#### Source

main.ts:35502

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_group)

#### Source

main.ts:35498

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleHotelsSerpElementItem.md#rectangle)

#### Source

main.ts:35520

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsSerpElementItem.md#url)

#### Source

main.ts:35514

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsSerpElementItem.md#xpath)

#### Source

main.ts:35508

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:35529

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:35554

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35547
