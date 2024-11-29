[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetAdvancedResultInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetAdvancedResultInfo()

> **new SerpBaiduOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:80169

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:80142

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:80147

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video, stocks_box, dictionary, shopping

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:80158

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:80165

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:80162

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:80131

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:80139

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:80137

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips
equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:80153

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:80135

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:80160

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:80150

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:80133

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:80178

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:80215

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:80208
