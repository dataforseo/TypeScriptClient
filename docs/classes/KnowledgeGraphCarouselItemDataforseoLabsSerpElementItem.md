[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:96307

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

main.ts:96298

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:96303

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

main.ts:96300

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### title?

> `optional` **title**: `string`

title of the link

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96294

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

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

main.ts:96312

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

main.ts:96337

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96330
