**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Class: SerpGoogleAutocompleteTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteTaskGetAdvancedResultInfo(data)

> **new SerpGoogleAutocompleteTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Source

main.ts:52536

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:52513

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:52518

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:52526

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:52532

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:52530

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:52502

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:52510

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:52508

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:52506

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:52528

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:52521

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:52504

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:52545

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:52581

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Source

main.ts:52574
