**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetRegularResultInfo

# Class: SerpNaverOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetRegularResultInfo(data)

> **new SerpNaverOrganicTaskGetRegularResultInfo**(`data`?): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:71892

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#check_url)

#### Source

main.ts:71866

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#datetime)

#### Source

main.ts:71871

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#item_types)

#### Source

main.ts:71882

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items)

#### Source

main.ts:71888

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items_count)

#### Source

main.ts:71886

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#keyword)

#### Source

main.ts:71855

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#language_code)

#### Source

main.ts:71863

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#location_code)

#### Source

main.ts:71861

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)

#### Source

main.ts:71859

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Source

main.ts:71884

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#spell)

#### Source

main.ts:71874

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#type)

#### Source

main.ts:71857

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:71901

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:71937

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:71930
