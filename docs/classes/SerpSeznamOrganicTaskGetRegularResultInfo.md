[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpSeznamOrganicTaskGetRegularResultInfo

# Class: SerpSeznamOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetRegularResultInfo()

> **new SerpSeznamOrganicTaskGetRegularResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:73895

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:73869

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:73874

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for the organic type only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Seznam Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:73885

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:73891

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:73889

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:73858

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:73866

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:73864

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:73862

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:73887

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:73877

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:73860

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:73904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:73940

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:73933
