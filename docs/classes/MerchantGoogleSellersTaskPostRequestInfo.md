[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskPostRequestInfo

# Class: MerchantGoogleSellersTaskPostRequestInfo

Defined in: main.ts:187350

## Implements

- [`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTaskPostRequestInfo()

> **new MerchantGoogleSellersTaskPostRequestInfo**(`data`?): [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

Defined in: main.ts:187460

#### Parameters

##### data?

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md)

#### Returns

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

## Properties

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

Defined in: main.ts:187422

object containing additional url parameters
you can get additional information about the product by using the "additional_specifications object, which you can get by making a separate request to the Google Shopping Products endpoint
example:
"additional_specifications": {
"eto": "16157121050167572763_0"
}

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`additional_specifications`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#additional_specifications)

***

### get\_shops\_on\_google?

> `optional` **get\_shops\_on\_google**: `boolean`

Defined in: main.ts:187415

include “buy on Google” shops
optional field
if set to true, the response will contain the list of sellers that allow to purchase a given product directly on Google
Note: if set to true, the cost of a task will be doubled

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`get_shops_on_google`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#get_shops_on_google)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:187403

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:187396

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:187380

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:187389

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:187373

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:187456

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

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:187445

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:187439

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

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:187366

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#priority)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:187358

unique product identifier on Google Shopping
required field
you can get this value making a separate request to the Google Shopping Products endpoint
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:187410

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:187428

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantGoogleSellersTaskPostRequestInfo`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantGoogleSellersTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:187469

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:187505

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)

Defined in: main.ts:187498

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)
