[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskPostRequestInfo

# Class: SerpGoogleAdsSearchTaskPostRequestInfo

## Implements

- [`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskPostRequestInfo()

> **new SerpGoogleAdsSearchTaskPostRequestInfo**(`data`?): [`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:61828

## Properties

### advertiser\_ids?

> `optional` **advertiser\_ids**: `string`[]

advertiser identifiers
required field if target is not specified
you can specify the maximum of 25 values in this array;
advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint;

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`advertiser_ids`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#advertiser_ids)

#### Defined in

main.ts:61726

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
required field if date_to is specified; 
date format: "yyyy-mm-dd"
minimum value: 2018-05-31
maximum value: today’s date
example:
"2020-01-01"

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`date_from`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#date_from)

#### Defined in

main.ts:61764

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
required field if date_from is specified; 
date format: "yyyy-mm-dd"
minimum value: 2018-05-31
maximum value: today’s date
example:
"2020-01-01"

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`date_to`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#date_to)

#### Defined in

main.ts:61773

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 40
max value: 700
Note: your account will be billed per each SERP containing up to 40 results;
thus, setting a depth above 40 may result in additional charges if the search engine returns more than 40 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:61782

***

### format?

> `optional` **format**: `string`

ad format
optional field
possible values: all, text, image, video

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`format`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#format)

#### Defined in

main.ts:61755

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
2840

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:61740

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
example:
52.6178549,-155.352142

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:61746

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:61733

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:61824

***

### platform?

> `optional` **platform**: `string`

advertising platform
optional field
possible values: all, google_pay, google_maps, google_search, google_shopping, youtube
default value: all

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`platform`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#platform)

#### Defined in

main.ts:61751

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:61813

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:61807

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:61790

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:61796

***

### target?

> `optional` **target**: `string`

domain name
required field if advertiser_ids is not specified
domain name associated with an advertiser account

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`target`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#target)

#### Defined in

main.ts:61721

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:61837

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:61872

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Defined in

main.ts:61865
