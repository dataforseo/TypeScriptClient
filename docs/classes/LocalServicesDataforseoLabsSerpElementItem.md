[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocalServicesDataforseoLabsSerpElementItem

# Class: LocalServicesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesDataforseoLabsSerpElementItem()

> **new LocalServicesDataforseoLabsSerpElementItem**(`data`?): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:102167

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### domain?

> `optional` **domain**: `string`

domain where a link points

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:102160

***

### items?

> `optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:102163

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:102152

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:102148

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:102145

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:102156

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:102158

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:102154

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

main.ts:102172

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

main.ts:102201

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:102194
