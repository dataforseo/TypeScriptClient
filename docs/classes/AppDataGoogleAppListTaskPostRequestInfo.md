**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskPostRequestInfo

# Class: AppDataGoogleAppListTaskPostRequestInfo

## Implements

- [`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskPostRequestInfo(data)

> **new AppDataGoogleAppListTaskPostRequestInfo**(`data`?): [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md)

#### Returns

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Source

main.ts:187648

## Properties

### age\_rating?

> **`optional`** **age\_rating**: `string`

filter results by age rating
optional field
you can use this field to filter the results by age rating;
possible types of filtering:
ages_up_to_5 — return apps approved for children up to 5 years old;
ages_6_8 — return apps approved for children from 6 to 8 years old;
ages_9_12 — return apps approved for children from 9 to 12 years old;
by default, the API returns apps for all ages;
Note: this filter works only in conjunction with the "category": "family" parameter

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`age_rating`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#age_rating)

#### Source

main.ts:187612

***

### app\_category?

> **`optional`** **app\_category**: `string`

application category on Google Play
optional field
you can filter the results by app category;
example:
family;
you can receive the full list of available categories by making a separate request to https://api.dataforseo.com/v3/app_data/google/categories
Note: app_category cannot be used if app_collection parameter is set to featured

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`app_category`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#app_category)

#### Source

main.ts:187602

***

### app\_collection?

> **`optional`** **app\_collection**: `string`

app collection
required field
app collection on Google Play from which apps will be collected;
you can specify the following values:
featured, topselling_paid, topselling_free, topselling_new_free, topselling_new_paid, topgrossing, movers_shakers
Note: if featured is selected, the app_category parameter cannot be used

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`app_collection`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#app_collection)

#### Source

main.ts:187551

***

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of apps to be returned in the API response;
we strongly recommend setting the parsing depth in the multiples of 100, because our system processes 100 results in a row;
default value: 100;
maximum value: 200

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`depth`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#depth)

#### Source

main.ts:187594

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
en

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#language_code)

#### Source

main.ts:187579

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/languages
example:
English

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`language_name`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#language_name)

#### Source

main.ts:187572

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
9061121

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#location_code)

#### Source

main.ts:187565

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/app_data/google/locations
example:
West Los Angeles,California,United States

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`location_name`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#location_name)

#### Source

main.ts:187558

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

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:187644

***

### postback\_data?

> **`optional`** **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`postback_data`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#postback_data)

#### Source

main.ts:187634

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

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`postback_url`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:187628

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

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`priority`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#priority)

#### Source

main.ts:187587

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IAppDataGoogleAppListTaskPostRequestInfo`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListTaskPostRequestInfo.md#tag)

#### Source

main.ts:187618

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187657

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187686

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)

#### Source

main.ts:187679
