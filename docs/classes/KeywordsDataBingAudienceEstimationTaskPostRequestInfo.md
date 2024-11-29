[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTaskPostRequestInfo

# Class: KeywordsDataBingAudienceEstimationTaskPostRequestInfo

## Implements

- [`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTaskPostRequestInfo()

> **new KeywordsDataBingAudienceEstimationTaskPostRequestInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTaskPostRequestInfo`](KeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTaskPostRequestInfo`](KeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

#### Defined in

main.ts:140196

## Properties

### age?

> `optional` **age**: `string`[]

selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`age`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#age)

#### Defined in

main.ts:140175

***

### bid?

> `optional` **bid**: `number`

desired bid setting value in USD
maximum value: 1000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`bid`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#bid)

#### Defined in

main.ts:140178

***

### daily\_budget?

> `optional` **daily\_budget**: `number`

daily campaign budget value in USD
maximum value: 10000

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`daily_budget`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#daily_budget)

#### Defined in

main.ts:140181

***

### gender?

> `optional` **gender**: `string`[]

gender to target
possible values: male, female, unknown

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`gender`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#gender)

#### Defined in

main.ts:140184

***

### industry?

> `optional` **industry**: `string`[]

industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`industry`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#industry)

#### Defined in

main.ts:140188

***

### job\_function?

> `optional` **job\_function**: `string`[]

job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`job_function`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#job_function)

#### Defined in

main.ts:140192

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

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:140164

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

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:140172

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

[`IKeywordsDataBingAudienceEstimationTaskPostRequestInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingAudienceEstimationTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:140157

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:140205

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:140246

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTaskPostRequestInfo`](KeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTaskPostRequestInfo`](KeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)

#### Defined in

main.ts:140239
