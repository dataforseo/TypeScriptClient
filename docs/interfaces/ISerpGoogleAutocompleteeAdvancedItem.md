[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpGoogleAutocompleteeAdvancedItem

# Interface: ISerpGoogleAutocompleteeAdvancedItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Defined in

main.ts:52355

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:52326

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:52323

***

### relevance?

> `optional` **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Defined in

main.ts:52333

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Defined in

main.ts:52342

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Defined in

main.ts:52335

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Defined in

main.ts:52339

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Defined in

main.ts:52348

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:52319
