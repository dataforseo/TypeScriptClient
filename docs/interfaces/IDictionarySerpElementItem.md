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

main.ts:70650

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:70648

***

### keyword?

> `optional` **keyword**: `string`

keyword highlighted in the result

#### Defined in

main.ts:70652

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Defined in

main.ts:70660

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`position`](IBaseSerpElementItem.md#position)

#### Defined in

main.ts:20721

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20717

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20714

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Defined in

main.ts:70664

***

### snippet?

> `optional` **snippet**: `string`

snippet of the element

#### Defined in

main.ts:70654

***

### text?

> `optional` **text**: `boolean`

description of the results element in SERP

#### Defined in

main.ts:70656

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:70644

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

#### Defined in

main.ts:20710

***

### url?

> `optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:70646

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`xpath`](IBaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20723
