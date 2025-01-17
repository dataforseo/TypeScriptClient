[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskPostRequestInfo

# Class: MerchantAmazonSellersTaskPostRequestInfo

Defined in: main.ts:195426

## Implements

- [`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskPostRequestInfo()

> **new MerchantAmazonSellersTaskPostRequestInfo**(`data`?): [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

Defined in: main.ts:195524

#### Parameters

##### data?

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md)

#### Returns

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:195434

unique product identifier on Amazon
required field
you can get this value making a separate request to the Amazon Products endpoint
note that there is no full list of possible values as the asin values is a dynamic value assigned by Amazon
example:
B085RFFC9Q
learn more about the identifier in this help center guide

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#asin)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:195479

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Amazon languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:195472

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Amazon languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:195456

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Amazon locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
2840

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:195465

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:195449

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Amazon locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:195520

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

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:195509

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:195503

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

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:195442

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:195486

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.co.uk, amazon.com.au, amazon.de, etc.

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:195492

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:195533

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:195561

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

Defined in: main.ts:195554

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)
