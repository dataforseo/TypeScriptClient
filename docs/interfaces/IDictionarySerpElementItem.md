[Documentation](../README.md) / [Exports](../modules.md) / IDictionarySerpElementItem

# Interface: IDictionarySerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IDictionarySerpElementItem`**

## Implemented by

- [`DictionarySerpElementItem`](../classes/DictionarySerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [breadcrumb](IDictionarySerpElementItem.md#breadcrumb)
- [domain](IDictionarySerpElementItem.md#domain)
- [keyword](IDictionarySerpElementItem.md#keyword)
- [links](IDictionarySerpElementItem.md#links)
- [position](IDictionarySerpElementItem.md#position)
- [rank\_absolute](IDictionarySerpElementItem.md#rank_absolute)
- [rank\_group](IDictionarySerpElementItem.md#rank_group)
- [rectangle](IDictionarySerpElementItem.md#rectangle)
- [snippet](IDictionarySerpElementItem.md#snippet)
- [text](IDictionarySerpElementItem.md#text)
- [title](IDictionarySerpElementItem.md#title)
- [url](IDictionarySerpElementItem.md#url)
- [xpath](IDictionarySerpElementItem.md#xpath)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Defined in

main.ts:67123

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:67121

___

### keyword

• `Optional` **keyword**: `string`

keyword highlighted in the result

#### Defined in

main.ts:67125

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Defined in

main.ts:67133

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:67113

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:67109

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:67106

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Defined in

main.ts:67137

___

### snippet

• `Optional` **snippet**: `string`

snippet of the element

#### Defined in

main.ts:67127

___

### text

• `Optional` **text**: `boolean`

description of the results element in SERP

#### Defined in

main.ts:67129

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:67117

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:67119

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:67115
