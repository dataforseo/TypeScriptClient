**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ScholarlyArticlesSerpElementItem

# Class: ScholarlyArticlesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScholarlyArticlesSerpElementItem(data)

> **new ScholarlyArticlesSerpElementItem**(`data`?): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

• **data?**: [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:33204

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### items?

> **`optional`** **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesSerpElementItem.md#items)

#### Source

main.ts:33196

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesSerpElementItem.md#position)

#### Source

main.ts:33187

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_absolute)

#### Source

main.ts:33183

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_group)

#### Source

main.ts:33179

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rectangle`](../interfaces/IScholarlyArticlesSerpElementItem.md#rectangle)

#### Source

main.ts:33200

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesSerpElementItem.md#title)

#### Source

main.ts:33191

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesSerpElementItem.md#url)

#### Source

main.ts:33193

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesSerpElementItem.md#xpath)

#### Source

main.ts:33189

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:33209

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:33238

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:33231
