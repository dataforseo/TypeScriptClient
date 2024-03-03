[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTaskPostRequestInfo

# Class: SerpGoogleSearchByImageTaskPostRequestInfo

## Implements

- [`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTaskPostRequestInfo.md#constructor)

### Properties

- [browser\_screen\_height](SerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_height)
- [browser\_screen\_resolution\_ratio](SerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_resolution_ratio)
- [browser\_screen\_width](SerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_width)
- [calculate\_rectangles](SerpGoogleSearchByImageTaskPostRequestInfo.md#calculate_rectangles)
- [image\_url](SerpGoogleSearchByImageTaskPostRequestInfo.md#image_url)
- [language\_code](SerpGoogleSearchByImageTaskPostRequestInfo.md#language_code)
- [language\_name](SerpGoogleSearchByImageTaskPostRequestInfo.md#language_name)
- [location\_code](SerpGoogleSearchByImageTaskPostRequestInfo.md#location_code)
- [location\_coordinate](SerpGoogleSearchByImageTaskPostRequestInfo.md#location_coordinate)
- [location\_name](SerpGoogleSearchByImageTaskPostRequestInfo.md#location_name)
- [max\_crawl\_pages](SerpGoogleSearchByImageTaskPostRequestInfo.md#max_crawl_pages)
- [pingback\_url](SerpGoogleSearchByImageTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpGoogleSearchByImageTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpGoogleSearchByImageTaskPostRequestInfo.md#postback_url)
- [priority](SerpGoogleSearchByImageTaskPostRequestInfo.md#priority)
- [se\_domain](SerpGoogleSearchByImageTaskPostRequestInfo.md#se_domain)
- [search\_param](SerpGoogleSearchByImageTaskPostRequestInfo.md#search_param)
- [tag](SerpGoogleSearchByImageTaskPostRequestInfo.md#tag)

### Methods

- [init](SerpGoogleSearchByImageTaskPostRequestInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTaskPostRequestInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTaskPostRequestInfo**(`data?`): [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

#### Defined in

main.ts:47425

## Properties

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to 1080;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[browser_screen_height](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_height)

#### Defined in

main.ts:47379

___

### browser\_screen\_resolution\_ratio

• `Optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to 1;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[browser_screen_resolution_ratio](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_resolution_ratio)

#### Defined in

main.ts:47385

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to 1920;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[browser_screen_width](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_width)

#### Defined in

main.ts:47373

___

### calculate\_rectangles

• `Optional` **calculate\_rectangles**: `boolean`

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[calculate_rectangles](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#calculate_rectangles)

#### Defined in

main.ts:47367

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
required field
the results will be based on the image you specified in this field
example:
https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[image_url](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#image_url)

#### Defined in

main.ts:47300

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[language_code](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:47353

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[language_name](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:47346

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[location_code](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:47329

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[location_coordinate](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:47339

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[location_name](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:47322

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[max_crawl_pages](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:47315

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

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

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:47421

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:47411

___

### postback\_url

• `Optional` **postback\_url**: `string`

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

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:47405

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[priority](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:47308

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[se_domain](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:47360

___

### search\_param

• `Optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[search_param](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#search_param)

#### Defined in

main.ts:47389

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpGoogleSearchByImageTaskPostRequestInfo](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[tag](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:47395

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:47434

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:47468

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

#### Defined in

main.ts:47461
