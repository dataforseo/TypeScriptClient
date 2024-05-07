**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskPostRequestInfo

# Class: MerchantGoogleProductSpecTaskPostRequestInfo

## Implements

- [`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskPostRequestInfo(data)

> **new MerchantGoogleProductSpecTaskPostRequestInfo**(`data`?): [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Source

main.ts:174673

## Properties

### additional\_specifications?

> **`optional`** **additional\_specifications**: `Object`

object containing additional url parameters
you can get additional information about the product by using the "additional_specifications object, which you can get by making a separate request to the Google Shopping Products endpoint
example:
"additional_specifications": \{
"eto": "16157121050167572763_0"
\}

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`additional_specifications`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#additional_specifications)

#### Source

main.ts:174637

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#language_code)

#### Source

main.ts:174623

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`language_name`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#language_name)

#### Source

main.ts:174616

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_code)

#### Source

main.ts:174600

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

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_coordinate)

#### Source

main.ts:174609

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`location_name`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#location_name)

#### Source

main.ts:174593

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

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:174669

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`postback_data`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:174659

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

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`postback_url`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:174653

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

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`priority`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#priority)

#### Source

main.ts:174586

***

### product\_id?

> **`optional`** **product\_id**: `string`

product ID
required field
unique product identifier in Google Shopping
you can receive the product_id by making a separate request to the Google Shopping Products endpoint
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#product_id)

#### Source

main.ts:174578

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#se_domain)

#### Source

main.ts:174630

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostRequestInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md).[`tag`](../interfaces/IMerchantGoogleProductSpecTaskPostRequestInfo.md#tag)

#### Source

main.ts:174643

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:174682

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:174717

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)

#### Source

main.ts:174710
