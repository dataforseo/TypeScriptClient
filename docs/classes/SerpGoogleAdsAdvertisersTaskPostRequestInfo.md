[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTaskPostRequestInfo

# Class: SerpGoogleAdsAdvertisersTaskPostRequestInfo

Defined in: main.ts:60374

## Implements

- [`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersTaskPostRequestInfo()

> **new SerpGoogleAdsAdvertisersTaskPostRequestInfo**(`data`?): [`SerpGoogleAdsAdvertisersTaskPostRequestInfo`](SerpGoogleAdsAdvertisersTaskPostRequestInfo.md)

Defined in: main.ts:60448

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersTaskPostRequestInfo`](SerpGoogleAdsAdvertisersTaskPostRequestInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:60382

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#keyword)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:60396

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_advertisers/locations
example:
2840

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:60402

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
example:
52.6178549,-155.352142

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:60389

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_advertisers/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:60444

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

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:60433

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
advanced

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:60427

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

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:60410

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:60416

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskPostRequestInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleAdsAdvertisersTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60457

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:60482

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersTaskPostRequestInfo`](SerpGoogleAdsAdvertisersTaskPostRequestInfo.md)

Defined in: main.ts:60475

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersTaskPostRequestInfo`](SerpGoogleAdsAdvertisersTaskPostRequestInfo.md)
