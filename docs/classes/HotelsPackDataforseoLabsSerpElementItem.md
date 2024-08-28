[**Documentation**](../README.md) • **Docs**

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

• **data?**: [`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99581

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

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

main.ts:99569

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

main.ts:99574

***

### items?

> `optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:99577

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:99560

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:99556

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:99553

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:99564

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:99562

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

main.ts:99586

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

main.ts:99615

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99608
