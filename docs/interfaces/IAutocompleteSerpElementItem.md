[Documentation](../README.md) / [Exports](../modules.md) / IAutocompleteSerpElementItem

# Interface: IAutocompleteSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IAutocompleteSerpElementItem`**

## Implemented by

- [`AutocompleteSerpElementItem`](../classes/AutocompleteSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [highlighted](IAutocompleteSerpElementItem.md#highlighted)
- [rank\_absolute](IAutocompleteSerpElementItem.md#rank_absolute)
- [rank\_group](IAutocompleteSerpElementItem.md#rank_group)
- [relevance](IAutocompleteSerpElementItem.md#relevance)
- [search\_query\_url](IAutocompleteSerpElementItem.md#search_query_url)
- [suggestion](IAutocompleteSerpElementItem.md#suggestion)
- [suggestion\_type](IAutocompleteSerpElementItem.md#suggestion_type)

## Properties

### highlighted

• `Optional` **highlighted**: `string`[]

#### Defined in

main.ts:51406

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:51389

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:51386

___

### relevance

• `Optional` **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Defined in

main.ts:51396

___

### search\_query\_url

• `Optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Defined in

main.ts:51405

___

### suggestion

• `Optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Defined in

main.ts:51398

___

### suggestion\_type

• `Optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Defined in

main.ts:51402
