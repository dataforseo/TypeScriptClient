[dataforseo-client](../README.md) / [Exports](../modules.md) / IFeaturedSnippetSerpElementItem

# Interface: IFeaturedSnippetSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IFeaturedSnippetSerpElementItem`**

## Implemented by

- [`FeaturedSnippetSerpElementItem`](../classes/FeaturedSnippetSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [breadcrumb](IFeaturedSnippetSerpElementItem.md#breadcrumb)
- [description](IFeaturedSnippetSerpElementItem.md#description)
- [domain](IFeaturedSnippetSerpElementItem.md#domain)
- [featured\_title](IFeaturedSnippetSerpElementItem.md#featured_title)
- [images](IFeaturedSnippetSerpElementItem.md#images)
- [position](IFeaturedSnippetSerpElementItem.md#position)
- [rank\_absolute](IFeaturedSnippetSerpElementItem.md#rank_absolute)
- [rank\_group](IFeaturedSnippetSerpElementItem.md#rank_group)
- [rectangle](IFeaturedSnippetSerpElementItem.md#rectangle)
- [table](IFeaturedSnippetSerpElementItem.md#table)
- [timestamp](IFeaturedSnippetSerpElementItem.md#timestamp)
- [title](IFeaturedSnippetSerpElementItem.md#title)
- [url](IFeaturedSnippetSerpElementItem.md#url)
- [xpath](IFeaturedSnippetSerpElementItem.md#xpath)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Defined in

[main.ts:25819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25819)

___

### description

• `Optional` **description**: `string`

description of the ad element in SERP

#### Defined in

[main.ts:25815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25815)

___

### domain

• `Optional` **domain**: `string`

domain of the ad element in SERP

#### Defined in

[main.ts:25811](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25811)

___

### featured\_title

• `Optional` **featured\_title**: `string`

title

#### Defined in

[main.ts:25827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25827)

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

[main.ts:25834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25834)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:25823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25823)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint

#### Defined in

[main.ts:25809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25809)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:25804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25804)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:25841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25841)

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

[main.ts:25837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25837)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:25832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25832)

___

### title

• `Optional` **title**: `string`

title of the ad element in SERP

#### Defined in

[main.ts:25813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25813)

___

### url

• `Optional` **url**: `string`

relevant URL of the ad element in SERP

#### Defined in

[main.ts:25817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25817)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:25825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25825)
