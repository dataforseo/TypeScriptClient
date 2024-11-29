[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingAudienceEstimationTaskPostRequestInfo

# Interface: IKeywordsDataBingAudienceEstimationTaskPostRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### age?

> `optional` **age**: `string`[]

selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve

#### Defined in

main.ts:140306

***

### bid?

> `optional` **bid**: `number`

desired bid setting value in USD
maximum value: 1000

#### Defined in

main.ts:140309

***

### daily\_budget?

> `optional` **daily\_budget**: `number`

daily campaign budget value in USD
maximum value: 10000

#### Defined in

main.ts:140312

***

### gender?

> `optional` **gender**: `string`[]

gender to target
possible values: male, female, unknown

#### Defined in

main.ts:140315

***

### industry?

> `optional` **industry**: `string`[]

industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758

#### Defined in

main.ts:140319

***

### job\_function?

> `optional` **job\_function**: `string`[]

job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451

#### Defined in

main.ts:140323

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Defined in

main.ts:140295

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

#### Defined in

main.ts:140303

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:140288
