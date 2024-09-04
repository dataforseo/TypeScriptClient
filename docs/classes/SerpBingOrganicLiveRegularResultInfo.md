[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicLiveRegularResultInfo

# Class: SerpBingOrganicLiveRegularResultInfo

## Implements

- [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveRegularResultInfo()

> **new SerpBingOrganicLiveRegularResultInfo**(`data`?): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Defined in

main.ts:58527

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#check_url)

#### Defined in

main.ts:58504

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#datetime)

#### Defined in

main.ts:58509

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#item_types)

#### Defined in

main.ts:58516

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items)

#### Defined in

main.ts:58523

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items_count)

#### Defined in

main.ts:58520

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#keyword)

#### Defined in

main.ts:58493

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#language_code)

#### Defined in

main.ts:58501

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#location_code)

#### Defined in

main.ts:58499

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_domain)

#### Defined in

main.ts:58497

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:58518

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#spell)

#### Defined in

main.ts:58512

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#type)

#### Defined in

main.ts:58495

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:58536

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:58572

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Defined in

main.ts:58565
