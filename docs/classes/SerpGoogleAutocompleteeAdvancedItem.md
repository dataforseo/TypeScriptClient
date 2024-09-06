[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleAutocompleteeAdvancedItem

# Class: SerpGoogleAutocompleteeAdvancedItem

## Implements

- [`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteeAdvancedItem()

> **new SerpGoogleAutocompleteeAdvancedItem**(`data`?): [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md)

#### Returns

[`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Defined in

main.ts:52289

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

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`highlighted`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#highlighted)

#### Defined in

main.ts:52285

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:52256

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#rank_group)

#### Defined in

main.ts:52253

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

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`relevance`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#relevance)

#### Defined in

main.ts:52263

***

### search\_query\_url?

> `optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`search_query_url`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#search_query_url)

#### Defined in

main.ts:52272

***

### suggestion?

> `optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`suggestion`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#suggestion)

#### Defined in

main.ts:52265

***

### suggestion\_type?

> `optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`suggestion_type`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#suggestion_type)

#### Defined in

main.ts:52269

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

url of the thumbnail image
url of the thumbnail image of the google autocomplete suggestion
Note: only available for the following client:
gws-wiz
gws-wiz-serp

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`thumbnail_url`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#thumbnail_url)

#### Defined in

main.ts:52278

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteeAdvancedItem`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAutocompleteeAdvancedItem.md#type)

#### Defined in

main.ts:52249

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:52298

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:52327

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)

#### Defined in

main.ts:52320
