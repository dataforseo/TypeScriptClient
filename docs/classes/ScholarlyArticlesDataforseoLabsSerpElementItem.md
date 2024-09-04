[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ScholarlyArticlesDataforseoLabsSerpElementItem

# Class: ScholarlyArticlesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScholarlyArticlesDataforseoLabsSerpElementItem()

> **new ScholarlyArticlesDataforseoLabsSerpElementItem**(`data`?): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:101391

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101387

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101378

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101374

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101371

***

### title?

> `optional` **title**: `string`

title of the item

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:101382

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:101384

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101380

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

main.ts:101396

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

main.ts:101424

***

### fromJS()

> `static` **fromJS**(`data`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:101417
