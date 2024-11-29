[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveRequestInfo

# Class: KeywordsDataBingAudienceEstimationLiveRequestInfo

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveRequestInfo()

> **new KeywordsDataBingAudienceEstimationLiveRequestInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Defined in

main.ts:141016

## Properties

### age?

> `optional` **age**: `string`[]

selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`age`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#age)

#### Defined in

main.ts:140995

***

### bid?

> `optional` **bid**: `number`

desired bid setting value in USD
maximum value: 1000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#bid)

#### Defined in

main.ts:140998

***

### daily\_budget?

> `optional` **daily\_budget**: `number`

daily campaign budget value in USD
maximum value: 10000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`daily_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#daily_budget)

#### Defined in

main.ts:141001

***

### gender?

> `optional` **gender**: `string`[]

gender to target
possible values: male, female, unknown

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`gender`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#gender)

#### Defined in

main.ts:141004

***

### industry?

> `optional` **industry**: `string`[]

industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`industry`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#industry)

#### Defined in

main.ts:141008

***

### job\_function?

> `optional` **job\_function**: `string`[]

job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`job_function`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#job_function)

#### Defined in

main.ts:141012

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_code)

#### Defined in

main.ts:140984

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius (in km)” format
the data will be provided for the country the specified coordinates belong to
example:
29.6821525,-82.4098881,100

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:140992

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_name)

#### Defined in

main.ts:140977

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:141025

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:141066

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Defined in

main.ts:141059
