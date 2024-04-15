**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskPostRequestInfo

# Class: MerchantAmazonSellersTaskPostRequestInfo

## Implements

- [`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskPostRequestInfo(data)

> **new MerchantAmazonSellersTaskPostRequestInfo**(`data`?): [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md)

#### Returns

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

#### Source

main.ts:179255

## Properties

### asin?

> **`optional`** **asin**: `string`

unique product identifier on Amazon
required field
you can get this value making a separate request to the Amazon Products endpoint
note that there is no full list of possible values as the asin values is a dynamic value assigned by Amazon
example:
B085RFFC9Q
learn more about the identifier in this help center guide

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#asin)

#### Source

main.ts:179167

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Amazon languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
en

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#language_code)

#### Source

main.ts:179212

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Amazon languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/languages
example:
English

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#language_name)

#### Source

main.ts:179205

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Amazon locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
2840

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#location_code)

#### Source

main.ts:179189

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

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

#### Source

main.ts:179198

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Amazon locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/amazon/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#location_name)

#### Source

main.ts:179182

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:179251

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:179241

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:179235

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#priority)

#### Source

main.ts:179175

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
amazon.co.uk, amazon.com.au, amazon.de, etc.

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#se_domain)

#### Source

main.ts:179219

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantAmazonSellersTaskPostRequestInfo`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTaskPostRequestInfo.md#tag)

#### Source

main.ts:179225

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:179264

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:179292

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)

#### Source

main.ts:179285
