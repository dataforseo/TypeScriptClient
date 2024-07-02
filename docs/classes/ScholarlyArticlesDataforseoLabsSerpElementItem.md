**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ScholarlyArticlesDataforseoLabsSerpElementItem

# Class: ScholarlyArticlesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScholarlyArticlesDataforseoLabsSerpElementItem(data)

> **new ScholarlyArticlesDataforseoLabsSerpElementItem**(`data`?): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:99766

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:99762

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:99753

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:99749

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:99746

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:99757

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:99759

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:99755

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:99771

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:99799

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:99792
