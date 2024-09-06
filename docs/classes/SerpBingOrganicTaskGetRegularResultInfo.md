[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicTaskGetRegularResultInfo

# Class: SerpBingOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetRegularResultInfo()

> **new SerpBingOrganicTaskGetRegularResultInfo**(`data`?): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:57820

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:57797

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:57802

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:57809

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:57816

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:57813

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:57786

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:57794

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:57792

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:57790

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:57811

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:57805

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:57788

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:57829

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:57865

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:57858
