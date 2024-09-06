[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpNaverOrganicTaskGetRegularResultInfo

# Class: SerpNaverOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetRegularResultInfo()

> **new SerpNaverOrganicTaskGetRegularResultInfo**(`data`?): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:71750

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:71724

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:71729

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:71740

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:71746

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:71744

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:71713

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:71721

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:71719

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:71717

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:71742

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:71732

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:71715

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:71759

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:71795

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:71788
