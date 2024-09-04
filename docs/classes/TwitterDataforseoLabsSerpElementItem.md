[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TwitterDataforseoLabsSerpElementItem

# Class: TwitterDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterDataforseoLabsSerpElementItem()

> **new TwitterDataforseoLabsSerpElementItem**(`data`?): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md)

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:97474

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`TwitterElement`](TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97470

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97461

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97457

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97454

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:97451

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97465

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:97467

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97463

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

main.ts:97479

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

main.ts:97508

***

### fromJS()

> `static` **fromJS**(`data`): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97501
