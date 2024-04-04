**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FeaturedSnippetSerpElementItem

# Class: FeaturedSnippetSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FeaturedSnippetSerpElementItem(data)

> **new FeaturedSnippetSerpElementItem**(`data`?): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

• **data?**: [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:26250

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`breadcrumb`](../interfaces/IFeaturedSnippetSerpElementItem.md#breadcrumb)

#### Source

main.ts:26224

***

### description?

> **`optional`** **description**: `string`

description of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`description`](../interfaces/IFeaturedSnippetSerpElementItem.md#description)

#### Source

main.ts:26220

***

### domain?

> **`optional`** **domain**: `string`

domain of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`domain`](../interfaces/IFeaturedSnippetSerpElementItem.md#domain)

#### Source

main.ts:26216

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

title

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`featured_title`](../interfaces/IFeaturedSnippetSerpElementItem.md#featured_title)

#### Source

main.ts:26232

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`images`](../interfaces/IFeaturedSnippetSerpElementItem.md#images)

#### Source

main.ts:26239

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`position`](../interfaces/IFeaturedSnippetSerpElementItem.md#position)

#### Source

main.ts:26228

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_absolute`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_absolute)

#### Source

main.ts:26214

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_group`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_group)

#### Source

main.ts:26209

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rectangle`](../interfaces/IFeaturedSnippetSerpElementItem.md#rectangle)

#### Source

main.ts:26246

***

### table?

> **`optional`** **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`table`](../interfaces/IFeaturedSnippetSerpElementItem.md#table)

#### Source

main.ts:26242

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`timestamp`](../interfaces/IFeaturedSnippetSerpElementItem.md#timestamp)

#### Source

main.ts:26237

***

### title?

> **`optional`** **title**: `string`

title of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`title`](../interfaces/IFeaturedSnippetSerpElementItem.md#title)

#### Source

main.ts:26218

***

### url?

> **`optional`** **url**: `string`

relevant URL of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`url`](../interfaces/IFeaturedSnippetSerpElementItem.md#url)

#### Source

main.ts:26222

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`xpath`](../interfaces/IFeaturedSnippetSerpElementItem.md#xpath)

#### Source

main.ts:26230

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

main.ts:26255

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

main.ts:26290

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:26283
