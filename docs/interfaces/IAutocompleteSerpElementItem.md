**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAutocompleteSerpElementItem

# Interface: IAutocompleteSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### highlighted?

> **`optional`** **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Source

main.ts:52905

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:52876

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:52873

***

### relevance?

> **`optional`** **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Source

main.ts:52883

***

### search\_query\_url?

> **`optional`** **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Source

main.ts:52892

***

### suggestion?

> **`optional`** **suggestion**: `string`

google autocomplete keyword suggestion

#### Source

main.ts:52885

***

### suggestion\_type?

> **`optional`** **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Source

main.ts:52889

***

### thumbnail\_url?

> **`optional`** **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Source

main.ts:52898
