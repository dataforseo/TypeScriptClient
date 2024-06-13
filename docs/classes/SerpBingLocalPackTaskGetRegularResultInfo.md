**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetRegularResultInfo

# Class: SerpBingLocalPackTaskGetRegularResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetRegularResultInfo(data)

> **new SerpBingLocalPackTaskGetRegularResultInfo**(`data`?): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Source

main.ts:59983

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#check_url)

#### Source

main.ts:59960

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#datetime)

#### Source

main.ts:59965

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#item_types)

#### Source

main.ts:59973

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items)

#### Source

main.ts:59979

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items_count)

#### Source

main.ts:59977

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#keyword)

#### Source

main.ts:59949

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#language_code)

#### Source

main.ts:59957

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#location_code)

#### Source

main.ts:59955

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)

#### Source

main.ts:59953

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)

#### Source

main.ts:59975

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#spell)

#### Source

main.ts:59968

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#type)

#### Source

main.ts:59951

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:59992

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:60028

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Source

main.ts:60021
