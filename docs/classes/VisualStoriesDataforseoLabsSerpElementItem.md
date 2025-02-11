[**Documentation**](../README.md)

***

[Documentation](../README.md) / VisualStoriesDataforseoLabsSerpElementItem

# Class: VisualStoriesDataforseoLabsSerpElementItem

Defined in: main.ts:109133

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new VisualStoriesDataforseoLabsSerpElementItem()

> **new VisualStoriesDataforseoLabsSerpElementItem**(`data`?): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:109139

#### Parameters

##### data?

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`LicensesElement`](LicensesElement.md)[]

Defined in: main.ts:109135

elements of search results found in SERP

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109144

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

Defined in: main.ts:109166

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:109159

#### Parameters

##### data

`any`

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
