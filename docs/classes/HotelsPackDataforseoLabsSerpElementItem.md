[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelsPackDataforseoLabsSerpElementItem

# Class: HotelsPackDataforseoLabsSerpElementItem

Defined in: main.ts:107557

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelsPackDataforseoLabsSerpElementItem()

> **new HotelsPackDataforseoLabsSerpElementItem**(`data`?): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107575

#### Parameters

##### data?

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:107564

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`date_from`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:107569

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`date_to`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_to)

***

### items?

> `optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

Defined in: main.ts:107571

elements of search results found in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:107559

title of the result in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:107580

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

Defined in: main.ts:107605

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

Defined in: main.ts:107598

#### Parameters

##### data

`any`

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
