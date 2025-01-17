[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveRequestInfo

# Class: KeywordsDataBingAudienceEstimationLiveRequestInfo

Defined in: main.ts:141038

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveRequestInfo()

> **new KeywordsDataBingAudienceEstimationLiveRequestInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

Defined in: main.ts:141084

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

## Properties

### age?

> `optional` **age**: `string`[]

Defined in: main.ts:141063

selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`age`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#age)

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:141066

desired bid setting value in USD
maximum value: 1000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#bid)

***

### daily\_budget?

> `optional` **daily\_budget**: `number`

Defined in: main.ts:141069

daily campaign budget value in USD
maximum value: 10000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`daily_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#daily_budget)

***

### gender?

> `optional` **gender**: `string`[]

Defined in: main.ts:141072

gender to target
possible values: male, female, unknown

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`gender`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#gender)

***

### industry?

> `optional` **industry**: `string`[]

Defined in: main.ts:141076

industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`industry`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#industry)

***

### job\_function?

> `optional` **job\_function**: `string`[]

Defined in: main.ts:141080

job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`job_function`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#job_function)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:141052

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:141060

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius (in km)” format
the data will be provided for the country the specified coordinates belong to
example:
29.6821525,-82.4098881,100

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:141045

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingAudienceEstimationLiveRequestInfo.md#location_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:141093

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:141134

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)

Defined in: main.ts:141127

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)
