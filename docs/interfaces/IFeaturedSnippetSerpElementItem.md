**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IFeaturedSnippetSerpElementItem

# Interface: IFeaturedSnippetSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Source

main.ts:27172

***

### description?

> **`optional`** **description**: `string`

description of the ad element in SERP

#### Source

main.ts:27168

***

### domain?

> **`optional`** **domain**: `string`

domain of the ad element in SERP

#### Source

main.ts:27164

***

### featured\_title?

> **`optional`** **featured\_title**: `string`

title

#### Source

main.ts:27180

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Source

main.ts:27187

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:27176

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint

#### Source

main.ts:27162

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:27157

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:27194

***

### table?

> **`optional`** **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Source

main.ts:27190

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:27185

***

### title?

> **`optional`** **title**: `string`

title of the ad element in SERP

#### Source

main.ts:27166

***

### url?

> **`optional`** **url**: `string`

relevant URL of the ad element in SERP

#### Source

main.ts:27170

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:27178
