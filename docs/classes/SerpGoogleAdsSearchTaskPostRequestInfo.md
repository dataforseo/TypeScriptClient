[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskPostRequestInfo

# Class: SerpGoogleAdsSearchTaskPostRequestInfo

Defined in: main.ts:61739

## Implements

- [`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskPostRequestInfo()

> **new SerpGoogleAdsSearchTaskPostRequestInfo**(`data`?): [`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

Defined in: main.ts:61853

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

## Properties

### advertiser\_ids?

> `optional` **advertiser\_ids**: `string`[]

Defined in: main.ts:61748

advertiser identifiers
required field if target is not specified
you can specify the maximum of 25 values in this array;
advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint;

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`advertiser_ids`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#advertiser_ids)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:61789

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

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:61798

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

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:61807

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

***

### format?

> `optional` **format**: `string`

Defined in: main.ts:61780

ad format
optional field
possible values: all, text, image, video

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`format`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#format)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:61764

search engine location code
optional field
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
2840
Note: if you don’t specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:61771

GPS coordinates of a location
optional field
if you use this field, you don’t need to specify location_name or location_code
example:
52.6178549,-155.352142
Note: if you don’t specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:61756

full name of search engine location
optional field
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
London,England,United Kingdom
Note: if you don’t specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:61849

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

***

### platform?

> `optional` **platform**: `string`

Defined in: main.ts:61776

advertising platform
optional field
possible values: all, google_play, google_maps, google_search, google_shopping, youtube
default value: all

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`platform`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#platform)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:61838

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:61832

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

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:61815

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:61821

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:61743

domain name
required field if advertiser_ids is not specified
domain name associated with an advertiser account

#### Implementation of

[`ISerpGoogleAdsSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md).[`target`](../interfaces/ISerpGoogleAdsSearchTaskPostRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:61862

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:61897

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)

Defined in: main.ts:61890

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)
