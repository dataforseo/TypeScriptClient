[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteAdvancedItem

# Class: SerpGoogleAutocompleteAdvancedItem

## Implements

- [`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteAdvancedItem()

> **new SerpGoogleAutocompleteAdvancedItem**(`data`?): [`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)

#### Parameters

##### data?

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md)

#### Returns

[`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)

#### Defined in

main.ts:55998

## Properties

### highlighted?

> `optional` **highlighted**: `string`[]

keywords highlighted in autocomplete
contains a list of google autocomplete suggestions that are highlighted in the search bar;
Note: array is only available for the following client:
gws-wiz
psy-ab
gws-wiz-local

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`highlighted`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#highlighted)

#### Defined in

main.ts:55994

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:55965

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#rank_group)

#### Defined in

main.ts:55962

***

### relevance?

> `optional` **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`relevance`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#relevance)

#### Defined in

main.ts:55972

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`search_query_url`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#search_query_url)

#### Defined in

main.ts:55981

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`suggestion`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#suggestion)

#### Defined in

main.ts:55974

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`suggestion_type`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#suggestion_type)

#### Defined in

main.ts:55978

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`thumbnail_url`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#thumbnail_url)

#### Defined in

main.ts:55987

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteAdvancedItem`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAutocompleteAdvancedItem.md#type)

#### Defined in

main.ts:55958

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:56007

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:56036

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAutocompleteAdvancedItem`](SerpGoogleAutocompleteAdvancedItem.md)

#### Defined in

main.ts:56029
