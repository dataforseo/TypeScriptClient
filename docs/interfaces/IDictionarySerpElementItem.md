[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDictionarySerpElementItem

# Interface: IDictionarySerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:71978

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:71976

***

### keyword?

> `optional` **keyword**: `string`

keyword highlighted in the result

#### Defined in

main.ts:71980

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Defined in

main.ts:71988

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:71968

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:71964

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:71961

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Defined in

main.ts:71992

***

### snippet?

> `optional` **snippet**: `string`

snippet of the element

#### Defined in

main.ts:71982

***

### text?

> `optional` **text**: `boolean`

description of the results element in SERP

#### Defined in

main.ts:71984

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:71972

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:71974

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:71970
