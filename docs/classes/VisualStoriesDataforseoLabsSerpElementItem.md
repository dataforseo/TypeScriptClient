[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / VisualStoriesDataforseoLabsSerpElementItem

# Class: VisualStoriesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VisualStoriesDataforseoLabsSerpElementItem()

> **new VisualStoriesDataforseoLabsSerpElementItem**(`data`?): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101975

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`LicensesElement`](LicensesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101971

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101966

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101962

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101959

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101968

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

main.ts:101980

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

main.ts:102006

***

### fromJS()

> `static` **fromJS**(`data`): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101999
