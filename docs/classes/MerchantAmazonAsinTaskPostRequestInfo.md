[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTaskPostRequestInfo

# Class: MerchantAmazonAsinTaskPostRequestInfo

Defined in: main.ts:193456

## Implements

- [`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTaskPostRequestInfo()

> **new MerchantAmazonAsinTaskPostRequestInfo**(`data`?): [`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)

Defined in: main.ts:193564

#### Parameters

##### data?

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md)

#### Returns

[`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:193461

product ID
required field
unique product identifier (ASIN) in Amazon
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`asin`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#asin)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:193508

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en_GB

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:193501

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English (United Kingdom)

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#language_name)

***

### load\_more\_local\_reviews?

> `optional` **load\_more\_local\_reviews**: `boolean`

Defined in: main.ts:193520

load more local reviews
optional field
if set to true, additional local reviews will be loaded in the top_local_reviews array of the Task GET response;
Note: you will be charged double the price for using this parameter

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`load_more_local_reviews`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#load_more_local_reviews)

***

### local\_reviews\_sort?

> `optional` **local\_reviews\_sort**: `string`

Defined in: main.ts:193526

sort local reviews
optional field
reviews in the top_local_reviews array of the Task GET response can be sorted by most helpful or most recent first;
possible values: helpful, recent
default value: helpful

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`local_reviews_sort`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#local_reviews_sort)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:193484

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/merchant/amazon/locations
example:
9045969

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:193493

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:193476

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with their location_name parameters by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
HA1,England,United Kingdom

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:193560

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

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:193549

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:193543

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

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:193469

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:193515

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.com, amazon.co.uk, amazon.fr, etc.

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:193532

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantAmazonAsinTaskPostRequestInfo`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantAmazonAsinTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193573

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:193603

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)

Defined in: main.ts:193596

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)
