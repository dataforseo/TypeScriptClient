[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleBusinessPostBusinessDataSerpElementItem

# Interface: IGoogleBusinessPostBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`IGoogleBusinessPostBusinessDataSerpElementItem`**

## Implemented by

- [`GoogleBusinessPostBusinessDataSerpElementItem`](../classes/GoogleBusinessPostBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author](IGoogleBusinessPostBusinessDataSerpElementItem.md#author)
- [images\_url](IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)
- [links](IGoogleBusinessPostBusinessDataSerpElementItem.md#links)
- [position](IGoogleBusinessPostBusinessDataSerpElementItem.md#position)
- [post\_date](IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)
- [post\_text](IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)
- [rank\_absolute](IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)
- [snippet](IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)
- [timestamp](IGoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)
- [url](IGoogleBusinessPostBusinessDataSerpElementItem.md#url)
- [xpath](IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

## Properties

### author

• `Optional` **author**: `string`

author of the post

#### Defined in

[main.ts:192461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192461)

___

### images\_url

• `Optional` **images\_url**: `string`

url of an image included in the post

#### Defined in

[main.ts:192469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192469)

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

links included in the post

#### Defined in

[main.ts:192480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192480)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values: right

#### Defined in

[main.ts:192457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192457)

___

### post\_date

• `Optional` **post\_date**: `string`

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Defined in

[main.ts:192473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192473)

___

### post\_text

• `Optional` **post\_text**: `string`

main content of a post

#### Defined in

[main.ts:192465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192465)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed updates
absolute position among all present elements

#### Defined in

[main.ts:192454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192454)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:192451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192451)

___

### snippet

• `Optional` **snippet**: `string`

additional content of a post

#### Defined in

[main.ts:192463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192463)

___

### timestamp

• `Optional` **timestamp**: `string`

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:192478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192478)

___

### url

• `Optional` **url**: `string`

url of a post

#### Defined in

[main.ts:192467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192467)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:192459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192459)
