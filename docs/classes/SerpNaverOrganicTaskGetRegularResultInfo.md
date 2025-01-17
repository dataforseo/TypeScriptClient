[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetRegularResultInfo

# Class: SerpNaverOrganicTaskGetRegularResultInfo

Defined in: main.ts:81406

## Implements

- [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetRegularResultInfo()

> **new SerpNaverOrganicTaskGetRegularResultInfo**(`data`?): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:81449

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:81420

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:81425

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:81439

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:81445

items in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:81443

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:81409

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:81417

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:81415

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:81431

search refinement chips
equals null

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:81413

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:81441

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:81428

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:81411

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:81458

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:81495

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:81488

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)
