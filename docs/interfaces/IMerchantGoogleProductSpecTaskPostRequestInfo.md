[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductSpecTaskPostRequestInfo

# Interface: IMerchantGoogleProductSpecTaskPostRequestInfo

Defined in: main.ts:189287

## Indexable

\[`key`: `string`\]: `any`

## Properties

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

Defined in: main.ts:189359

object containing additional url parameters
you can get additional information about the product by using the "additional_specifications object, which you can get by making a separate request to the Google Shopping Products endpoint
example:
"additional_specifications": {
"eto": "16157121050167572763_0"
}

#### Index Signature

\[`key`: `string`\]: `string`

***

### data\_docid?

> `optional` **data\_docid**: `string`

Defined in: main.ts:189300

unique identifier of the SERP data element
required field if product_id is not specified
you can get this value for a certain element by making a separate request to the Google Shopping Products endpoint
example:
13071766526042404278

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:189345

language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available Google Shopping languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:189338

full name of the language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available Google Shopping languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:189322

location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available Google Shopping locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:189331

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:189315

full name of the location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available Google Shopping locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/merchant/google/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:189393

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

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:189382

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:189376

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

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:189308

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
the cost can be calculated on the Pricing page.

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:189294

unique product identifier on Google Shopping
required field if data_docid is not specified
you can get this value for a certain product by making a separate request to the Google Shopping Products endpoint
example:
4485466949985702538
learn more about the parameter in this help center guide

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:189352

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:189365

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
