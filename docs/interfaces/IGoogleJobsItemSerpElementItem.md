[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleJobsItemSerpElementItem

# Interface: IGoogleJobsItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IGoogleJobsItemSerpElementItem`**

## Implemented by

- [`GoogleJobsItemSerpElementItem`](../classes/GoogleJobsItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [contract\_type](IGoogleJobsItemSerpElementItem.md#contract_type)
- [employer\_image\_url](IGoogleJobsItemSerpElementItem.md#employer_image_url)
- [employer\_name](IGoogleJobsItemSerpElementItem.md#employer_name)
- [employer\_url](IGoogleJobsItemSerpElementItem.md#employer_url)
- [job\_id](IGoogleJobsItemSerpElementItem.md#job_id)
- [location](IGoogleJobsItemSerpElementItem.md#location)
- [position](IGoogleJobsItemSerpElementItem.md#position)
- [rank\_absolute](IGoogleJobsItemSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleJobsItemSerpElementItem.md#rank_group)
- [rectangle](IGoogleJobsItemSerpElementItem.md#rectangle)
- [salary](IGoogleJobsItemSerpElementItem.md#salary)
- [source\_name](IGoogleJobsItemSerpElementItem.md#source_name)
- [source\_url](IGoogleJobsItemSerpElementItem.md#source_url)
- [time\_ago](IGoogleJobsItemSerpElementItem.md#time_ago)
- [timestamp](IGoogleJobsItemSerpElementItem.md#timestamp)
- [title](IGoogleJobsItemSerpElementItem.md#title)
- [xpath](IGoogleJobsItemSerpElementItem.md#xpath)

## Properties

### contract\_type

• `Optional` **contract\_type**: `string`

employment contract type

#### Defined in

[main.ts:49256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49256)

___

### employer\_image\_url

• `Optional` **employer\_image\_url**: `string`

URL to the image used in the job posting

#### Defined in

[main.ts:49245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49245)

___

### employer\_name

• `Optional` **employer\_name**: `string`

name of the employer

#### Defined in

[main.ts:49241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49241)

___

### employer\_url

• `Optional` **employer\_url**: `string`

URL to the employer’s website

#### Defined in

[main.ts:49243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49243)

___

### job\_id

• `Optional` **job\_id**: `string`

ID of the job on Google Jobs

#### Defined in

[main.ts:49237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49237)

___

### location

• `Optional` **location**: `string`

location for which the job vacancy is posted

#### Defined in

[main.ts:49247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49247)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:49233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49233)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:49229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49229)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:49226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49226)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

#### Defined in

[main.ts:49267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49267)

___

### salary

• `Optional` **salary**: `string`

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

#### Defined in

[main.ts:49254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49254)

___

### source\_name

• `Optional` **source\_name**: `string`

original source of the job vacancy

#### Defined in

[main.ts:49249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49249)

___

### source\_url

• `Optional` **source\_url**: `string`

URL to the original source of the job vacancy

#### Defined in

[main.ts:49251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49251)

___

### time\_ago

• `Optional` **time\_ago**: `string`

indicates how long ago the job vacancy was posted

#### Defined in

[main.ts:49263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49263)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:49261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49261)

___

### title

• `Optional` **title**: `string`

title of the job

#### Defined in

[main.ts:49239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49239)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:49235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49235)
