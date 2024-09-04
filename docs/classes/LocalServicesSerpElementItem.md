[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocalServicesSerpElementItem

# Class: LocalServicesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesSerpElementItem()

> **new LocalServicesSerpElementItem**(`data`?): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35597

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### domain?

> `optional` **domain**: `string`

source domain

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`domain`](../interfaces/ILocalServicesSerpElementItem.md#domain)

#### Defined in

main.ts:35586

***

### items?

> `optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`items`](../interfaces/ILocalServicesSerpElementItem.md#items)

#### Defined in

main.ts:35589

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`position`](../interfaces/ILocalServicesSerpElementItem.md#position)

#### Defined in

main.ts:35578

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:35574

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesSerpElementItem.md#rank_group)

#### Defined in

main.ts:35570

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rectangle`](../interfaces/ILocalServicesSerpElementItem.md#rectangle)

#### Defined in

main.ts:35593

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`title`](../interfaces/ILocalServicesSerpElementItem.md#title)

#### Defined in

main.ts:35582

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`url`](../interfaces/ILocalServicesSerpElementItem.md#url)

#### Defined in

main.ts:35584

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesSerpElementItem.md#xpath)

#### Defined in

main.ts:35580

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:35602

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:35632

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35625
