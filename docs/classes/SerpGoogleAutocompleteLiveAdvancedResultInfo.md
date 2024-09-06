[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleAutocompleteLiveAdvancedResultInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAutocompleteLiveAdvancedResultInfo()

> **new SerpGoogleAutocompleteLiveAdvancedResultInfo**(`data`?): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Defined in

main.ts:52886

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:52863

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:52868

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:52876

***

### items?

> `optional` **items**: [`SerpGoogleAutocompleteeAdvancedItem`](SerpGoogleAutocompleteeAdvancedItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:52882

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:52880

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:52852

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:52860

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:52858

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:52856

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:52878

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:52871

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:52854

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:52895

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:52931

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Defined in

main.ts:52924
