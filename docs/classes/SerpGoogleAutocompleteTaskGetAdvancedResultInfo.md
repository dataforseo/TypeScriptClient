[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Class: SerpGoogleAutocompleteTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTaskGetAdvancedResultInfo()

> **new SerpGoogleAutocompleteTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:52430

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:52407

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:52412

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:52420

***

### items?

> `optional` **items**: [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:52426

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:52424

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:52396

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:52404

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:52402

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:52400

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:52422

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:52415

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:52398

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:52439

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:52475

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:52468
