[dataforseo-client](../README.md) / [Exports](../modules.md) / FeaturedSnippetSerpElementItem

# Class: FeaturedSnippetSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`FeaturedSnippetSerpElementItem`**

## Implements

- [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FeaturedSnippetSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FeaturedSnippetSerpElementItem.md#_discriminator)
- [breadcrumb](FeaturedSnippetSerpElementItem.md#breadcrumb)
- [description](FeaturedSnippetSerpElementItem.md#description)
- [domain](FeaturedSnippetSerpElementItem.md#domain)
- [featured\_title](FeaturedSnippetSerpElementItem.md#featured_title)
- [images](FeaturedSnippetSerpElementItem.md#images)
- [position](FeaturedSnippetSerpElementItem.md#position)
- [rank\_absolute](FeaturedSnippetSerpElementItem.md#rank_absolute)
- [rank\_group](FeaturedSnippetSerpElementItem.md#rank_group)
- [rectangle](FeaturedSnippetSerpElementItem.md#rectangle)
- [table](FeaturedSnippetSerpElementItem.md#table)
- [timestamp](FeaturedSnippetSerpElementItem.md#timestamp)
- [title](FeaturedSnippetSerpElementItem.md#title)
- [url](FeaturedSnippetSerpElementItem.md#url)
- [xpath](FeaturedSnippetSerpElementItem.md#xpath)

### Methods

- [init](FeaturedSnippetSerpElementItem.md#init)
- [toJSON](FeaturedSnippetSerpElementItem.md#tojson)
- [fromJS](FeaturedSnippetSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FeaturedSnippetSerpElementItem**(`data?`): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md) |

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:25731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25731)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the ad element in SERP

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[breadcrumb](../interfaces/IFeaturedSnippetSerpElementItem.md#breadcrumb)

#### Defined in

[main.ts:25705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25705)

___

### description

• `Optional` **description**: `string`

description of the ad element in SERP

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[description](../interfaces/IFeaturedSnippetSerpElementItem.md#description)

#### Defined in

[main.ts:25701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25701)

___

### domain

• `Optional` **domain**: `string`

domain of the ad element in SERP

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[domain](../interfaces/IFeaturedSnippetSerpElementItem.md#domain)

#### Defined in

[main.ts:25697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25697)

___

### featured\_title

• `Optional` **featured\_title**: `string`

title

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[featured_title](../interfaces/IFeaturedSnippetSerpElementItem.md#featured_title)

#### Defined in

[main.ts:25713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25713)

___

### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[images](../interfaces/IFeaturedSnippetSerpElementItem.md#images)

#### Defined in

[main.ts:25720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25720)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[position](../interfaces/IFeaturedSnippetSerpElementItem.md#position)

#### Defined in

[main.ts:25709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25709)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[rank_absolute](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:25695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25695)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[rank_group](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_group)

#### Defined in

[main.ts:25690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25690)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[rectangle](../interfaces/IFeaturedSnippetSerpElementItem.md#rectangle)

#### Defined in

[main.ts:25727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25727)

___

### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[table](../interfaces/IFeaturedSnippetSerpElementItem.md#table)

#### Defined in

[main.ts:25723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25723)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[timestamp](../interfaces/IFeaturedSnippetSerpElementItem.md#timestamp)

#### Defined in

[main.ts:25718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25718)

___

### title

• `Optional` **title**: `string`

title of the ad element in SERP

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[title](../interfaces/IFeaturedSnippetSerpElementItem.md#title)

#### Defined in

[main.ts:25699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25699)

___

### url

• `Optional` **url**: `string`

relevant URL of the ad element in SERP

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[url](../interfaces/IFeaturedSnippetSerpElementItem.md#url)

#### Defined in

[main.ts:25703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25703)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFeaturedSnippetSerpElementItem](../interfaces/IFeaturedSnippetSerpElementItem.md).[xpath](../interfaces/IFeaturedSnippetSerpElementItem.md#xpath)

#### Defined in

[main.ts:25711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25711)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:25736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25736)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:25771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25771)

___

### fromJS

▸ **fromJS**(`data`): [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:25764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25764)
