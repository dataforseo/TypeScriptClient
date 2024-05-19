**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPaidSerpElementItem

# Interface: IPaidSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Source

main.ts:26226

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Source

main.ts:26240

***

### description\_rows?

> **`optional`** **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Source

main.ts:26243

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Source

main.ts:26224

***

### extra?

> **`optional`** **extra**: `Object`

additional information about the result

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:26238

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Source

main.ts:26236

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Source

main.ts:26232

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Source

main.ts:26228

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Source

main.ts:26230

***

### links?

> **`optional`** **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Source

main.ts:26247

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:26218

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Source

main.ts:26250

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:26214

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:26211

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:26254

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:26222

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Source

main.ts:26234

***

### website\_name?

> **`optional`** **website\_name**: `string`

website name in SERP

#### Source

main.ts:26256

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:26220
