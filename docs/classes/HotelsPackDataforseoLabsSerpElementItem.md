[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackDataforseoLabsSerpElementItem

# Class: HotelsPackDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelsPackDataforseoLabsSerpElementItem()

> **new HotelsPackDataforseoLabsSerpElementItem**(`data`?): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Parameters

##### data?

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:107451

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21425

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`date_from`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_from)

#### Defined in

main.ts:107440

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`date_to`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_to)

#### Defined in

main.ts:107445

***

### items?

> `optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:107447

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:21421

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21417

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:21414

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:107435

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:21411

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:21423

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:107456

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:107481

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:107474
