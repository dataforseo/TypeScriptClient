[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

Defined in: main.ts:106142

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem()

> **new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem**(`data`?): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106157

#### Parameters

##### data?

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:106148

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

Defined in: main.ts:106153

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:106150

link of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106144

title of the link

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106162

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

Defined in: main.ts:106187

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106180

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
