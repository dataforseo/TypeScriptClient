[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTaskPostRequestInfo

# Class: MerchantGoogleProductInfoTaskPostRequestInfo

Defined in: main.ts:190266

## Implements

- [`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTaskPostRequestInfo()

> **new MerchantGoogleProductInfoTaskPostRequestInfo**(`data`?): [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

Defined in: main.ts:190369

#### Parameters

##### data?

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md)

#### Returns

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

## Properties

### data\_docid?

> `optional` **data\_docid**: `string`

Defined in: main.ts:190279

unique identifier of the SERP data element
required field if product_id is not specified
you can get this value for a certain element by making a separate request to the Google Shopping Products endpoint
example:
13071766526042404278

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`data_docid`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#data_docid)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:190324

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:190317

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:190301

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:190310

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:190294

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:190365

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

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:190354

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:190348

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

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:190287

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#priority)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:190273

unique product identifier on Google Shopping
required field if data_docid is not specified
you can get this value for a certain product by making a separate request to the Google Shopping Products endpoint
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:190331

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:190337

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantGoogleProductInfoTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantGoogleProductInfoTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190378

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:190407

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)

Defined in: main.ts:190400

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)
