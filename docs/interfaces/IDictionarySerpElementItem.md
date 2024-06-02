**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDictionarySerpElementItem

# Interface: IDictionarySerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Source

main.ts:70501

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Source

main.ts:70499

***

### keyword?

> **`optional`** **keyword**: `string`

keyword highlighted in the result

#### Source

main.ts:70503

***

### links?

> **`optional`** **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Source

main.ts:70511

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:70491

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:70487

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:70484

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Source

main.ts:70515

***

### snippet?

> **`optional`** **snippet**: `string`

snippet of the element

#### Source

main.ts:70505

***

### text?

> **`optional`** **text**: `boolean`

description of the results element in SERP

#### Source

main.ts:70507

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:70495

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:70497

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:70493
